import { UrlObject } from './url-list'
import fetch from 'node-fetch'
import { performance } from 'perf_hooks'
import chalk from 'chalk'

const PSI_API_KEY: string = process.env.PSI_API_TOKEN || ''

const setUpQuery = (url: string, apiKey: string): string => {
  const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
  const parameters: any = {
    url: encodeURIComponent(url),
    strategy: 'MOBILE',
    category: 'PERFORMANCE&category=ACCESSIBILITY',
    key: apiKey
  }
  let query = `${api}?`
  Object.keys(parameters).forEach((key: string, index: number) => {
    query += `${index > 0 ? '&' : ''}${key}=${parameters[key]}`
  })

  return query
}

const executePSI = async (urlObject: UrlObject): Promise<void> => {
  console.info(chalk.magenta('PSI EXECUTION STARTED'))
  const time = performance.now()
  try {
    const url = setUpQuery(urlObject.url, PSI_API_KEY)
    const httpResponse = await fetch(url)
    return await httpResponse.json()
  } catch (error) {
    console.error(error)
  } finally {
    console.info(chalk.magenta(`PSI EXECUTION TIME: ${time}`))
  }
}

export { executePSI }
