import fs from 'fs-extra'
import { UrlObject } from './url-list'
import { performance } from 'perf_hooks'
import chalk from 'chalk'

const writeReport = async (filename: string, json: UrlObject): Promise<any> => {
  console.info(chalk.yellow(`JSON WRITER STARTED`))
  const time = performance.now()
  try {
    await fs.outputJson(filename, json, {})
    return filename
  } catch (error) {
    throw error
  } finally {
    console.info(chalk.yellow(`JSON WRITER EXECUTION TIME: ${time}`))
  }
}

export { writeReport }
