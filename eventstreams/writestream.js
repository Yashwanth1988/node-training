const fs = require('fs')

const wstream = fs.createWriteStream('messaage.txt', {
    highWaterMark: 10
})

wstream.write('Hello World..!')
wstream.write('Hello PSL')

console.log('File created.!')