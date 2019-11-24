const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('I am middleware')
    next()
})

app.use(express.static(__dirname+'/public'))

app.use(express.urlencoded({
    extended: true
}))

app.listen(3000, () => {
    console.log('server is up and running @ port 3000')
})


app.get('/', (req, res) => {
    res.send('<h2>Welcome to express</h2>')
})

app.get('/psl', (req, res) => {
    console.log(req.query.name)
    res.send(`<h2>Welcome : ${req.query.name} </h2>`)
})


app.post('/login', (req, res) => {
    res.send('<h2>Welcome to PSL</h2>')
})

app.get('/greet/:name', (req, res) => {
    console.log(req.params.name)
    res.send(`<h2>Hi : ${req.params.name} </h2>`)
})

app.post('/checklogin', (req, res) => {
    console.log(req)
    const { username, password } = req.body
    console.log(req.body)
    if(username == "admin" && password == "admin123")
        res.send(`<h2>login success</h2>`)
    else
        res.send(`<h2>login NOT success</h2>`)
})


app.use((req, res, next) => {
    res.status(404).send("<h1>File not found</h1>")
    next()
})