//크롤러
//겔부루에서 나나치 사진 1분마다 따옴
const Kaori = require('kaori')
const kaori = new Kaori();

global.images = []

crawl()
setInterval(async () => {
    crawl()
}, 60000)

async function crawl () {
    images = await kaori.search('gelbooru', {
        tags: ['nanachi_(made_in_abyss) rating:safe'],
        limit: 200,
        random: false
    })
    console.log('crawled!')
}

console.log('crawler started!')