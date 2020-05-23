export interface UrlObject {
  url: string
  name: string
  page: string
  executionDate?: number
  result?: any
}

const urlList: UrlObject[] = [
  {
    url: 'https://www.amazon.es/',
    name: 'amazon',
    page: 'home'
  },
  {
    url: 'https://www.amazon.es/gp/bestsellers/?ref_=nav_cs_bestsellers',
    name: 'amazon',
    page: 'listings'
  },
  {
    url: 'https://www.idealista.com',
    name: 'idealista',
    page: 'home'
  },
  {
    url: 'https://www.idealista.com/alquiler-viviendas/madrid-provincia/',
    name: 'idealista',
    page: 'listings'
  },
  {
    url: 'https://es.wallapop.com',
    name: 'wallapop',
    page: 'home'
  },
  {
    url: 'https://es.wallapop.com/search?',
    name: 'wallapop',
    page: 'listings'
  }
]

export { urlList }
