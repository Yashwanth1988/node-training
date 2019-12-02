const fs = require('fs')

const rstream = fs.createReadStream('input.txt', { highWaterMark: 1000})
const wstream = fs.createWriteStream('output.txt', { highWaterMark: 1000})

rstream.pipe(wstream)

console.log('streaming input.txt to output.txt')