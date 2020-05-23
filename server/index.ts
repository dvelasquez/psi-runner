import { urlList, UrlObject } from './services/url-list'
import { executePSI } from './services/execute-psi'
import { writeReport } from './services/write-report'
import { performance } from 'perf_hooks'
import Bluebird from 'bluebird'
import chalk from 'chalk'

const analyseUrl = async (url: UrlObject): Promise<any> => {
  const executionDate = Date.now()
  const result = {
    ...url,
    executionDate,
    result: await executePSI(url)
  }
  await writeReport(`psi-data/reports/${url.name}/${url.page}/${executionDate}.json`, result)
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
    process.exit(0)
  }
}

main()
