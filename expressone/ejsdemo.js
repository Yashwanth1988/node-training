const express = require('express')

const app = express()

const db = require('./mysqldb')

// no import of ejs is needed since express has inbuild support
app.set('view engine', 'ejs')
app.set('views', 'views')

app.listen(3000, () => {{
    console.log('server running')
}})

/* const cars =  [{
        id: 1,
        make: "Hyundai",
        model: "Grand i10",
        variant: "Sports"
    },
    {
        id: 2,
        make: "Maruthi",
        model: "Swift",
        variant: "Desire"
    }
] */



app.get('/', (req, res) => {
    let sql = 'select * from cartable'
    db.execute(sql).then(([rows, fields]) => {
        res.render('one.ejs', {
            name: "Harry",
            cars: rows
        }) // no need of extension
    })
    
})

app.get('/cars', (req, res) => {
    let sql = 'select * from cartable'
    db.execute(sql).then(([rows, fields]) => {
        res.render('carsview.ejs', {
            cars: rows
        }) // no need of extension
    })
    
})

app.get('/searchview', (req,res) => {

    res.render('searchview.ejs') 

    /* let sql = `select * from cartable where id=${req.query.id}`
    db.execute(sql).then(([rows, fields]) => {
        res.render('carsview.ejs', {
            cars: rows
        }) // no need of extension
    }) */
})

app.get('/search', (req,res) => {

     //let sql = `select * from cartable where id='${req.query.id}'`
     let carid = req.query.id
     let sql = `select * from cartable where id=?`
    db.execute(sql, [carid]).then(([rows, fields]) => {
        res.render('searchedcars.ejs', {
            cars: rows
        }) // no need of extension
    }) 
})