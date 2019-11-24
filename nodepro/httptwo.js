const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const rURL = url.parse(req.url, true)
    const { query : { name }} = rURL
    console.log(rURL)
    res.write(`<h1>Hello: ${name}</h1>`)
    
    res.end()
})  

server.listen(3000, () => {
    console.log('server up and running at port 3000')
})