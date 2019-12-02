// test commit
const express = require('express');
const cars = require('./store');

const app = express();

app.use(express.json())

app.listen(3000,()=>{
    console.log('SERVER IS UP !!!');
});

app.get('/',(req,res)=>{
    res.send('<h3>REST API DEMO</h3>');
});

app.get('/cars',(req,res)=>{
    res.json(cars)
});

app.get('/cars/:id',(req,res)=>{
    let id = req.params.id;
    res.json(cars.filter( c=> c.id == id));
    //res.json(cars)
});

app.post('/cars', (req, res) => {
    let car = req.body
    cars.push(car)
    res.status(200).json(cars)
})

app.delete('/cars/:id', (req, res) => {
    let id = req.params.id;
    res.json(cars.filter( c=> c.id !== id));
})

app.put('/cars/:id', (req, res) => {
    let id = req.params.id;
    let { body } = req
    let car = cars.find( c => c.id === id)
    let updatecar = { ...car,  ...body }
    res.status(200).json(updatecar)
})