//크롤러
//구글에서 나나치 사진 1분마다 따옴
const google = require('google-parser');
const Env = use('Env')

global.images = []

crawl()
setInterval(async () => {
    crawl()
}, 60000)

async function crawl () {
    images = await google.img(Env.get('SEARCH_QUERY', 'nanachi made in abyss'))
    console.log('Image Updated!')
}

console.log('crawler started!')