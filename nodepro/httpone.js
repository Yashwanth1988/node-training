const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    if(req.url == '/hello')
        res.write('<h1>Hello World 111</h1>')
    else
        res.write('<h1>Page Not Found</h1>')
    res.end()
})  

server.listen(3000, () => {
    console.log('server up and running at port 3000')
})