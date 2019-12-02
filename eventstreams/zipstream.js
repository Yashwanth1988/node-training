const fs = require('fs')
const zlib = require('zlib')

const rstream = fs.createReadStream('input.txt', { highWaterMark: 1000})
const wstream = fs.createWriteStream('output.zip')

rstream.pipe(zlib.createGzip()).pipe(wstream)

console.log('zip file created..!')