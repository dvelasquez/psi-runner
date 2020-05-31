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
  },
  {
    url: 'https://www.milanuncios.com/',
    name: 'milanuncios',
    page: 'home'
  },
  {
    url: 'https://www.milanuncios.com/anuncios/?fromSearch=1',
    name: 'milanuncios',
    page: 'listings'
  },
  {
    url: 'https://www.infojobs.net/',
    name: 'infojobs',
    page: 'home'
  },
  {
    url: 'https://www.infojobs.net/jobsearch/search-results/list.xhtml',
    name: 'infojobs',
    page: 'listings'
  },
  {
    url: 'https://www.fotocasa.es/es/',
    name: 'fotocasa',
    page: 'home'
  },
  {
    url:
      'https://www.fotocasa.es/es/alquiler/viviendas/barcelona-capital/todas-las-zonas/l?latitude=41.3854&longitude=2.1775&combinedLocationIds=724,9,8,232,376,8019,0,0,0',
    name: 'fotocasa',
    page: 'listings'
  },
  {
    url: 'https://www.coches.net/',
    name: 'coches',
    page: 'home'
  },
  {
    url: 'https://www.coches.net/segunda-mano/',
    name: 'coches',
    page: 'listings'
  },
  {
    url: 'https://www.habitaclia.com/',
    name: 'habitaclia',
    page: 'home'
  },
  {
    url: 'https://www.habitaclia.com/viviendas-en-barcelones.htm',
    name: 'habitaclia',
    page: 'listings'
  },
  {
    url: 'https://www.vibbo.com/',
    name: 'vibbo',
    page: 'home'
  },
  {
    url: 'https://www.vibbo.com/anuncios-toda-espana/?ca=0_s&fPos=353&fOn=sb_location',
    name: 'vibbo',
    page: 'listings'
  },
  {
    url: 'https://motos.coches.net/',
    name: 'motos',
    page: 'home'
  },
  {
    url: 'https://motos.coches.net/segunda-mano/',
    name: 'motos',
    page: 'listings'
  },
  {
    url: 'https://es.aliexpress.com/?spm=a2g0o.home.1000002.1.5ff470e5I4Blvk',
    name: 'aliexpress',
    page: 'home'
  },
  {
    url: 'https://es.aliexpress.com/w/wholesale-billetera-mujer.html?osf=shading',
    name: 'aliexpress',
    page: 'listings'
  },
  {
    url: 'https://www.zalando.es/',
    name: 'zalando',
    page: 'home'
  },
  {
    url: 'https://www.zalando.es/catalogo/',
    name: 'zalando',
    page: 'listings'
  }
]

export { urlList }
