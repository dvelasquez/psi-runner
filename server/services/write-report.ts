import fs from 'fs-extra'
import { UrlObject } from './url-list'
import { performance } from 'perf_hooks'
import chalk from 'chalk'
import * as AWS from 'aws-sdk'

const IAM_USER_KEY = process.env.IAM_USER_KEY || ''
const IAM_USER_SECRET = process.env.IAM_USER_SECRET || ''

const bucketParams = {
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET
}
AWS.config.update({ region: 'eu-central-1' })
const s3 = new AWS.S3(bucketParams)

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

const writeReportToS3 = async (filename: string, json: UrlObject): Promise<any> => {
  console.info(chalk.green(`UPLOADING JSON TO S3`))

  const time = performance.now()
  try {
    if (IAM_USER_KEY && IAM_USER_SECRET) {
      await s3
        .putObject({
          Bucket: 'page-speed-insights-runner',
          ContentType: 'application/json; charset=utf-8',
          Key: filename,
          Body: JSON.stringify(json)
        })
        .promise()
      return filename
    } else {
      throw new Error('UPLOADING JSON TO S3 FAILED, NO CREDENTIALS PROVIDED')
    }
  } catch (error) {
    throw error
  } finally {
    console.info(chalk.green(`UPLOADING JSON TO S3 EXECUTION TIME: ${time}`))
  }
}

export { writeReport, writeReportToS3 }
