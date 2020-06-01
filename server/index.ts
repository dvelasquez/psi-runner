import { urlList, UrlObject } from './services/url-list'
import { executePSI } from './services/execute-psi'
import { writeReport, writeReportToS3 } from './services/write-report'
import { performance } from 'perf_hooks'
import Bluebird from 'bluebird'
import chalk from 'chalk'
import express from 'express'
import shell from 'shelljs'
const app = express()

const ITERATIVE_EXECUTION = process.env.ITERATIVE_EXECUTION || ''
const AWS_PUBLISH = process.env.AWS_PUBLISH || ''
const PORT = process.env.PORT || 8080
let iteration = 1
let lastExecutionDate = new Date()

app.get('/', (req, res) => {
  res.send(`Iteration number ${iteration} at ${lastExecutionDate.toISOString()}`)
})

app.listen(PORT, () => {
  console.log(chalk.green(`App running at port ${PORT}`))
})

const analyseUrl = async (url: UrlObject): Promise<any> => {
  const executionDate = Date.now()
  const result = {
    ...url,
    executionDate,
    result: await executePSI(url)
  }
  await Promise.all([
    writeReport(`psi-data/reports/${url.name}/${url.page}/${executionDate}.json`, result),
    AWS_PUBLISH && writeReportToS3(`psi-data/reports/${url.name}/${url.page}/${executionDate}.json`, result)
  ])
  return result
}

const main = async (): Promise<void> => {
  console.info(chalk.blue(`STARTING EXECUTION`))
  const time = performance.now()
  try {
    await Bluebird.mapSeries(urlList, (url) => {
      return analyseUrl(url)
    })
  } catch (error) {
    console.info(chalk.red(`EXECUTION FAILED`))
    console.error(error)
    process.exit(1)
  } finally {
    console.info(chalk.green(`EXECUTION TIME: ${time}`))
    !ITERATIVE_EXECUTION && process.exit(0)
  }
}

main().then(() => {
  if (ITERATIVE_EXECUTION) {
    !AWS_PUBLISH && shell.exec('./push-data-from-docker.sh')
  }
})

if (ITERATIVE_EXECUTION) {
  setInterval(async () => {
    lastExecutionDate = new Date()
    console.log(chalk.bgRed(chalk.black(`Running iterative process at ${lastExecutionDate.toISOString()}`)))
    await main()
    !AWS_PUBLISH && shell.exec('./push-data-from-docker.sh')
    iteration++
  }, 1800000)
}
