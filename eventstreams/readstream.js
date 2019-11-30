const fs = require('fs')
let fsize = fs.readFileSync('input.txt').length
const rstream = fs.createReadStream('input.txt', { highWaterMark: 1000 })

console.log('file size', fsize)
let progress = 0
rstream.on('data', (chunk) => {
    //console.log(chunk.length)
    progress += (chunk.length/fsize)*100
    console.log(progress+ ' %')
})


rstream.on('end', (chunk) => {
    console.log('--------------END---------------------')
})