const fs = require('fs')

fs.readFile('message.txt', function(err, data) {
    if(err) return console.log('error opening file')
    console.log(data.toString())
})

let data = fs.readFileSync('message.txt')
console.log(data.toString())
