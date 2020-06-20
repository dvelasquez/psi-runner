export interface UrlObject {
  url: string
  name: string
  page: string
  executionDate?: number
  result?: any
}

const urlList: UrlObject[] = [
  { name: 'amazon', page: 'home', url: 'https://www.amazon.es/' },
  { name: 'amazon', page: 'listings', url: 'https://www.amazon.es/s?k=zapatos+rojos' },
  { name: 'aliexpress', page: 'home', url: 'https://m.es.aliexpress.com/?tracelog=wwwhome2mobilesitehome' },
  {
    name: 'aliexpress',
    page: 'listings',
    url: 'https://m.es.aliexpress.com/wholesale/zapatos+rojos.html?channel=direct&keywords=zapatos+rojos'
  },
  { name: 'el corte ingles', page: 'home', url: 'https://www.elcorteingles.es/' },
  { name: 'el corte ingles', page: 'listings', url: 'https://www.elcorteingles.es/search/?s=zapatos+rojos' },
  { name: 'booking', page: 'home', url: 'https://www.booking.com/' },
  {
    name: 'booking',
    page: 'listings',
    url:
      'https://www.booking.com/searchresults.html?src=searchresults&rows=20&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaEaIAQKYATG4AQnIARHYAQPoAQH4AQKIAgGoAgO4AseOsvcFwAIB0gIkOWM3OGUyM2UtNDJmMi00MzVhLTk0MGMtYjkzNGY1NmVhODlm2AIE4AIB%3Bsid%3D4f02b9861bcac5a258f24428d20d8b66%3Bsrpvid%3Da5f543a6451501f7%26%3B&label=gen173nr-1DCAEoggI46AdIM1gEaEaIAQKYATG4AQnIARHYAQPoAQH4AQKIAgGoAgO4AseOsvcFwAIB0gIkOWM3OGUyM2UtNDJmMi00MzVhLTk0MGMtYjkzNGY1NmVhODlm2AIE4AIB&sid=4f02b9861bcac5a258f24428d20d8b66&sb=1&city=-1456928&ssne=Paris&ssne_untouched=Paris&ss=Paris&checkin_monthday=20&checkin_year_month=2020-8&checkout_monthday=27&checkout_year_month=2020-8&checkin=2020-08-20&checkout=2020-08-27&room1=A%2CA&group_adults=2&group_children=0&no_rooms=1&search_form_id=a5f543a6451501f7&search_pageview_id=a5f543a6451501f7'
  },
  { name: 'ebay', page: 'home', url: 'https://www.ebay.es/' },
  {
    name: 'ebay',
    page: 'listings',
    url: 'https://www.ebay.es/sch/i.html?_nkw=zapatos+rojos&_trksid=p2380057.m4084.l1313.TR12.TRC2.A0.H0.Xzapatos+r.TRS0'
  },
  { name: 'tripadvisor', page: 'home', url: 'https://www.tripadvisor.es/' },
  { name: 'tripadvisor', page: 'listings', url: 'https://www.tripadvisor.es/Hotels-g187147-Paris_Ile_de_France-Hotels.html' },
  { name: 'samsung', page: 'home', url: 'https://www.samsung.com/es/' },
  { name: 'samsung', page: 'listings', url: 'https://www.samsung.com/es/search/?searchvalue=rojo' },
  { name: 'carrefour', page: 'home', url: 'https://www.carrefour.es/' },
  { name: 'carrefour', page: 'listings', url: 'https://www.carrefour.es/?q=rojo' },
  { name: 'leroy merlin', page: 'home', url: 'https://www.leroymerlin.es/' },
  { name: 'leroy merlin', page: 'listings', url: 'https://www.leroymerlin.es/buscador?q=rojo' },
  { name: 'renfe', page: 'home', url: 'https://www.renfe.com/' },
  { name: 'renfe', page: 'listings', url: 'https://www.renfe.com/WebOfertaComercial/jsp/homeOfertaComercial.jsp?destacado=S' },
  { name: 'decathlon', page: 'home', url: 'https://www.decathlon.es/es/' },
  { name: 'decathlon', page: 'listings', url: 'https://www.decathlon.es/es/search?Nes=rojo&max_files=50&sort_by=' },
  { name: 'pccomponentes', page: 'home', url: 'https://www.pccomponentes.com/' },
  { name: 'pccomponentes', page: 'listings', url: 'https://www.pccomponentes.com/buscar/?query=rojo' },
  { name: 'airbnb', page: 'home', url: 'https://www.airbnb.es/' },
  {
    name: 'airbnb',
    page: 'listings',
    url: 'https://www.airbnb.es/s/Costa~Brava~~Spain/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&query=Costa-Brava--Spain'
  },
  { name: 'zalando', page: 'home', url: 'https://m.zalando.es/' },
  { name: 'zalando', page: 'listings', url: 'https://m.zalando.es/rojo/' },
  { name: 'trivago', page: 'home', url: 'https://www.trivago.es/' },
  { name: 'trivago', page: 'listings', url: 'https://www.trivago.es/barcelona-31965/hotel' },
  { name: 'zara', page: 'home', url: 'https://m.zara.com/es/' },
  {
    name: 'zara',
    page: 'listings',
    url: 'https://m.zara.com/es/es/search?filter=&section=WOMAN&searchTerm=rojo&type=user&origin=default#'
  },
  { name: 'skyscanner', page: 'home', url: 'https://www.skyscanner.es/' },
  {
    name: 'skyscanner',
    page: 'listings',
    url:
      'https://www.skyscanner.es/transporte/vuelos/bcn/pari/?adults=2&children=0&adultsv2=2&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&preferflexible=false&outboundaltsenabled=false&inboundaltsenabled=false&destinationentityid=27539733&ref=home&oym=2008&selectedoday=01&iym=2008&selectediday=01'
  },
  { name: 'apple', page: 'home', url: 'https://www.apple.com/' },
  { name: 'apple', page: 'listings', url: 'https://www.apple.com/us/search/rojo?src=globalnav' },
  { name: 'vueling', page: 'home', url: 'https://m.vueling.com/' },
  { name: 'vueling', page: 'listings', url: 'https://www.vueling.com/en/routes/cheap-flights-from-london-to-barcelona' },
  { name: 'ryanair', page: 'home', url: 'https://www.ryanair.com/es/es' },
  { name: 'ryanair', page: 'listings', url: 'https://www.ryanair.com/flights/es/es/vuelos-a-londres' },
  { name: 'e-dreams', page: 'home', url: 'https://www.edreams.es/' },
  { name: 'e-dreams', page: 'listings', url: 'https://www.edreams.es/vuelos/baratos/#!/' },
  { name: 'lidl', page: 'home', url: 'https://www.lidl.es/es/onlineshop' },
  { name: 'lidl', page: 'listings', url: 'https://www.lidl.es/es/search?query=rojo' },
  { name: 'fnac', page: 'home', url: 'https://www.fnac.es/' },
  { name: 'fnac', page: 'listings', url: 'https://www.fnac.es/SearchResult/ResultList.aspx?SCat=0%211&Search=rojo&sft=1&sa=0' },
  { name: 'groupon', page: 'home', url: 'https://www.groupon.es/' },
  {
    name: 'groupon',
    page: 'listings',
    url: 'https://www.groupon.es/browse/barcelona?lat=41.385&lng=2.173&query=rojo&address=Barcelona&division=barcelona&locale=es_ES'
  },
  { name: 'casa del libro', page: 'home', url: 'https://www.casadellibro.com/' },
  { name: 'casa del libro', page: 'listings', url: 'https://www.casadellibro.com/?q=rojo' },
  { name: 'atrapalo', page: 'home', url: 'https://www.atrapalo.com/' },
  { name: 'atrapalo', page: 'listings', url: 'https://www.atrapalo.com/viajes/circuitos/europa_z1.html' },
  { name: 'mi', page: 'home', url: 'https://mobile.mi.com/es/' },
  { name: 'mi', page: 'listings', url: 'https://mobile.mi.com/es/search/searchpage/mi' },
  { name: 'logitravel', page: 'home', url: 'https://www.logitravel.com/' },
  { name: 'logitravel', page: 'listings', url: 'https://www.logitravel.com/ofertas/fines-de-semana/' },
  { name: 'game', page: 'home', url: 'https://www.game.es/' },
  { name: 'game', page: 'listings', url: 'https://www.game.es/buscar/rojo' },
  { name: 'privalia', page: 'home', url: 'https://es.mobile.privalia.com/welcome/index/msg0100403?' },
  { name: 'privalia', page: 'listings', url: 'https://es.privalia.com/public/notlogged' },
  { name: 'alsa', page: 'home', url: 'https://www.alsa.com/' },
  {
    name: 'alsa',
    page: 'listings',
    url:
      'https://www.alsa.com/en/web/bus/checkout?p_p_id=PurchasePortlet_WAR_Alsaportlet&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&_PurchasePortlet_WAR_Alsaportlet_javax.portlet.action=searchJourneysAction&p_auth=umJ3c1W6&code=&serviceType=&accessible=0&_JourneySearchPortlet_WAR_Alsaportlet_INSTANCE_JourneySearch_21660584_originStationNameId=Madrid%20-%20Barajas%20Airport%20T4&originStationId=5555&destinationStationId=90305&departureDate=08%2F20%2F2020&returnDate=&locationMode=&passengerType-1=1&passengerType-4=0&passengerType-5=0&passengerType-2=0&passengerType-3=0&numPassengers=1&regionalZone=&travelType=OUTWARD&LIFERAY_SHARED_isTrainTrip=false&promoCode=&jsonAlsaPassPassenger=&jsonVoucherPassenger='
  },
  { name: 'primor', page: 'home', url: 'https://www.primor.eu/' },
  { name: 'primor', page: 'listings', url: 'https://www.primor.eu/#/dfclassic/query=rojo&query_name=match_and' },
  { name: 'iberia', page: 'home', url: 'https://www.iberia.com/' },
  {
    name: 'iberia',
    page: 'listings',
    url:
      'https://www.iberia.com/flights/?market=ES&language=es&appliesOMB=false&splitEndCity=false&initializedOMB=true&flexible=true&TRIP_TYPE=2&BEGIN_CITY_01=MAD&END_CITY_01=BCN&BEGIN_DAY_01=20&BEGIN_MONTH_01=202008&BEGIN_YEAR_01=2020&END_DAY_01=27&END_MONTH_01=202008&END_YEAR_01=2020&FARE_TYPE=R&quadrigam=IBHMPA&ADT=1&CHD=0&INF=0&BNN=0&YTH=0&YCD=0&residentCode=&familianumerosa=&BV_UseBVCookie=no&boton=Buscar&bookingMarket=ES#!/availability'
  },
  { name: 'mango', page: 'home', url: 'https://shop.mango.com/es' },
  { name: 'mango', page: 'listings', url: 'https://shop.mango.com/es/search?kw=rojo&brand=she&origin=caja-busqueda' },
  { name: 'gearbest', page: 'home', url: 'https://m.gearbest.com/' },
  { name: 'gearbest', page: 'listings', url: 'https://m.gearbest.com/sale/rojo/' },
  { name: 'mediamarkt', page: 'home', url: 'https://www.mediamarkt.es/' },
  {
    name: 'mediamarkt',
    page: 'listings',
    url:
      'https://www.mediamarkt.es/es/search.html?searchProfile=onlineshop&searchParams=&channel=mmeses&storeId=121956&langId=-5&query=rojo&search-submit=Buscar'
  },
  { name: 'kayak', page: 'home', url: 'https://www.kayak.es/' },
  { name: 'kayak', page: 'listings', url: 'https://www.kayak.es/flights/BCN-PAR/2020-08-20/2020-08-27' },
  { name: 'mercadona', page: 'home', url: 'https://www.mercadona.es/' },
  { name: 'mercadona', page: 'listings', url: 'https://info.mercadona.es/es/consejos/mascotas' },
  { name: 'pull and bear', page: 'home', url: 'https://www.pullandbear.com/es/' },
  {
    name: 'pull and bear',
    page: 'listings',
    url: 'https://www.pullandbear.com/es/mujer-c1010141503.html?q=Rojo&filter=hierarchical_category%3A%22mujer%22'
  },
  { name: 'al campo', page: 'home', url: 'https://www.alcampo.es/compra-online/' },
  { name: 'al campo', page: 'listings', url: 'https://www.alcampo.es/compra-online/search/?department=&text=rojo' },
  { name: 'worten', page: 'home', url: 'https://www.worten.es/' },
  { name: 'worten', page: 'listings', url: 'https://www.worten.es/search?query=rojo&sortBy=relevance&hitsPerPage=24&page=1' },
  { name: 'asos', page: 'home', url: 'https://www.asos.com/' },
  { name: 'asos', page: 'listings', url: 'https://www.asos.com/search/?q=rojo' },
  { name: 'stradivarius', page: 'home', url: 'https://www.stradivarius.com/es/' },
  {
    name: 'stradivarius',
    page: 'listings',
    url: 'https://www.stradivarius.com/es/nueva-colecci%C3%B3n/ropa/compra-por-producto/vestidos/ver-todo-c1020132510.html'
  },
  { name: 'conforama', page: 'home', url: 'https://www.conforama.es/' },
  { name: 'conforama', page: 'listings', url: 'https://www.conforama.es/#/dfclassic/query=rojo&query_name=match_and' },
  { name: 'bershka', page: 'home', url: 'https://www.bershka.com/es/en/' },
  { name: 'bershka', page: 'listings', url: 'https://www.bershka.com/es/en/?search=rojo' },
  { name: 'kiabi', page: 'home', url: 'https://www.kiabi.es/' },
  { name: 'kiabi', page: 'listings', url: 'https://www.kiabi.es/vestidos-mujer_201538' },
  { name: 'nike', page: 'home', url: 'https://www.nike.com/es' },
  { name: 'nike', page: 'listings', url: 'https://www.nike.com/es/w?q=rojo&vst=rojo' },
  { name: 'eltenedor', page: 'home', url: 'https://www.eltenedor.es/' },
  { name: 'eltenedor', page: 'listings', url: 'https://www.eltenedor.es/search/?cityId=41710&restaurantTagId[]=370' },
  { name: 'etsy', page: 'home', url: 'https://www.etsy.com/' },
  { name: 'etsy', page: 'listings', url: 'https://www.etsy.com/search?q=rojo' },
  { name: 'promofarma', page: 'home', url: 'https://www.promofarma.com/' },
  { name: 'promofarma', page: 'listings', url: 'https://www.promofarma.com/es/search?q=rojo' },
  { name: 'adidas', page: 'home', url: 'https://www.adidas.es/' },
  { name: 'adidas', page: 'listings', url: 'https://www.adidas.es/search?q=rojo' },
  { name: 'wish', page: 'home', url: 'https://www.wish.com/' },
  { name: 'wish', page: 'listings', url: 'https://www.wish.com/search/rojo' },
  { name: 'banggood', page: 'home', url: 'https://m.banggood.com/' },
  { name: 'banggood', page: 'listings', url: 'https://m.banggood.com/search/rojo.html' },
  { name: 'mi farma', page: 'home', url: 'https://www.mifarma.es/' },
  { name: 'mi farma', page: 'listings', url: 'https://www.mifarma.es/catalogsearch/result/?q=rojo' },
  { name: 'rumbo', page: 'home', url: 'https://www.rumbo.es/' },
  { name: 'rumbo', page: 'listings', url: 'https://www.rumbo.es/es/viajes/vacaciones-espana' },
  { name: 'dia', page: 'home', url: 'https://www.dia.es/compra-online/' },
  { name: 'dia', page: 'listings', url: 'https://www.dia.es/compra-online/search?text=rojo&x=0&y=0' },
  { name: 'civitatis', page: 'home', url: 'https://www.civitatis.com/es/' },
  { name: 'civitatis', page: 'listings', url: 'https://www.civitatis.com/es/paris/' },
  { name: 'venca', page: 'home', url: 'https://m.venca.es/' },
  { name: 'venca', page: 'listings', url: 'https://m.venca.es/search?q=rojo' },
  { name: 'playstation', page: 'home', url: 'https://www.playstation.com/es-es/' },
  {
    name: 'playstation',
    page: 'listings',
    url: 'https://www.playstation.com/es-es/search-results/?q=rojo&smcid=web%3Apsn%3Aprimary%20nav%3Asearch%3Arojo'
  },
  { name: 'jd sports', page: 'home', url: 'https://m.jdsports.es/' },
  { name: 'jd sports', page: 'listings', url: 'https://m.jdsports.es/search/rojo/' },
  { name: 'ikea', page: 'home', url: 'https://www.ikea.com/es/es/' },
  { name: 'ikea', page: 'listings', url: 'https://www.ikea.com/es/es/search/products/?q=rojo' },
  { name: 'ulabox', page: 'home', url: 'https://www.ulabox.com/' },
  { name: 'ulabox', page: 'listings', url: 'https://www.ulabox.com/busca/?q=rojo' },
  { name: 'lola market', page: 'home', url: 'https://lolamarket.com/es/en/' },
  { name: 'lola market', page: 'listings', url: 'https://lolamarket.com/es/en/tienda/carrefour-market/buscar/rojo' },
  { name: 'deliberry', page: 'home', url: 'https://www.deliberry.com/' },
  { name: 'deliberry', page: 'listings', url: 'https://www.deliberry.com/mercadona/search?q=rojo&store=mercadona' },
  { name: 'uniqlo', page: 'home', url: 'https://www.uniqlo.com/es/es/home' },
  { name: 'uniqlo', page: 'listings', url: 'https://www.uniqlo.com/es/es/search?q=rojo' },
  { name: 'hm', page: 'home', url: 'https://m2.hm.com/m/es_es/index.html' },
  { name: 'hm', page: 'listings', url: 'https://m2.hm.com/m/es_es/search-results.html?q=rojo' },
  { name: 'sephora', page: 'home', url: 'https://www.sephora.es/' },
  { name: 'sephora', page: 'listings', url: 'https://www.sephora.es/buscar?q=rojo' },
  { name: 'douglas', page: 'home', url: 'https://douglas.es/' },
  { name: 'douglas', page: 'listings', url: 'https://douglas.es/?q=rojo' },
  { name: 'mequedouno', page: 'home', url: 'https://www.mequedouno.com/' },
  { name: 'mequedouno', page: 'listings', url: 'https://www.mequedouno.com/search/?s=rojo&scat=' },
  { name: 'wallapop', page: 'home', url: 'https://es.wallapop.com/' },
  { name: 'wallapop', page: 'listings', url: 'https://es.wallapop.com/search?keywords=rojo&latitude=40.4893538&longitude=-3.6827461' },
  { name: 'fotocasa', page: 'home', url: 'https://www.fotocasa.es/es/' },
  {
    name: 'fotocasa',
    page: 'listings',
    url:
      'https://www.fotocasa.es/es/comprar/viviendas/barcelona-capital/todas-las-zonas/l?latitude=41.3854&longitude=2.1775&combinedLocationIds=724,9,8,232,376,8019,0,0,0'
  },
  { name: 'habitaclia', page: 'home', url: 'https://m.habitaclia.com/' },
  { name: 'habitaclia', page: 'listings', url: 'https://m.habitaclia.com/viviendas-barcelona.htm' },
  { name: 'infojobs', page: 'home', url: 'https://www.infojobs.net/' },
  { name: 'infojobs', page: 'listings', url: 'https://www.infojobs.net/jobsearch/search-results/list.xhtml' },
  { name: 'coches.net', page: 'home', url: 'https://www.coches.net/' },
  { name: 'coches.net', page: 'listings', url: 'https://www.coches.net/nuevo/km-0/' },
  { name: 'milanuncios', page: 'home', url: 'https://www.milanuncios.com/' },
  { name: 'milanuncios', page: 'listings', url: 'https://www.milanuncios.com/anuncios/rojo.htm?fromSearch=1' },
  { name: 'vibbo', page: 'home', url: 'https://www.vibbo.com/' },
  { name: 'vibbo', page: 'listings', url: 'https://www.vibbo.com/hogar-toda-espana/rojo.htm?ca=0_s&fPos=83&fOn=sb_searchtext' },
  { name: 'idealista', page: 'home', url: 'https://www.idealista.com ' },
  { name: 'idealista', page: 'listings', url: 'https://www.idealista.com/alquiler-viviendas/madrid-provincia/' },
  { name: 'zalando', page: 'home', url: 'https://m.zalando.es/' },
  { name: 'zalando', page: 'listings', url: 'https://m.zalando.es/rojo/' },
  { name: 'fruugo', page: 'home', url: 'https://www.fruugo.es/' },
  { name: 'fruugo', page: 'listings', url: 'https://www.fruugo.es/search/?q=rojo' },
  { name: 'runnics', page: 'home', url: 'https://www.runnics.com/' },
  { name: 'runnics', page: 'listings', url: 'https://www.runnics.com/?s=rojo&post_type=product&product_cat=' },
  { name: 'cdiscount', page: 'home', url: 'https://www.cdiscount.com/' },
  {
    name: 'cdiscount',
    page: 'listings',
    url:
      'https://www.cdiscount.com/search/10/rojo.html?nav=JTdCJTIybHBsciUyMjolN0IlMjJzZWxlY3RlZEZpbHRlcklkcyUyMjolNUIlNUQsJTIyc2VsZWN0ZWRTb3J0aW5nSWQlMjI6JTVCJTIycGVydGluZW5jZSUyMiU1RCwlMjJmYWNldHMlMjI6ZmFsc2UlN0QsJTIyY3VycmVudExwJTIyOjE1NjU1MjI0MjYlN0Q%3D'
  },
  { name: 'spartoo', page: 'home', url: 'https://www.spartoo.es/mobile/' },
  { name: 'spartoo', page: 'listings', url: 'https://www.spartoo.es/mobile/busqueda-rojo.php' },
  { name: 'la redoute', page: 'home', url: 'https://www.laredoute.es/' },
  { name: 'la redoute', page: 'listings', url: 'https://www.laredoute.es/psrch/psrch.aspx?kwrd=rojo&virtualsite=100#srt=noSorting' },
  { name: 'mascoteros', page: 'home', url: 'https://www.mascoteros.com/' },
  { name: 'mascoteros', page: 'listings', url: 'https://www.mascoteros.com/search?q=rojo&root_category=' },
  { name: 'pixmania', page: 'home', url: 'https://www.pixmania.es/' },
  { name: 'pixmania', page: 'listings', url: 'https://www.pixmania.es/s?q=rojo' }
]

export { urlList }
