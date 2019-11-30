const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product');
let url = 'mongodb://127.0.0.1:27017/psldb';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    // if(err) return console.log("Error connection in db ....");
    console.log('connect to db ....');
    app.listen(3000, () => {
        console.log('server is up: 3000');
    });
}).catch((err) => {
    console.log('errorr')
})



app.get('/', (req, res) => {
    res.send('<h1>Welcome Mongoose Demo !! .. </h1>');
});

app.get('/products', (req, res) => {
    Product.find().then((prs) => {
        res.json(prs);
    })
});

app.get('/products/:code', (req, res) => {
    let test = req.params.code;
    Product.find({ code: test }).then((prs) => {
        res.json(prs);
    });
});

app.delete('/products/:code', (req, res) => {
    let code = req.params.code;
    Product.deleteOne({ code }).then((prs) => {
        res.json(prs);
    });
});

app.post('/product', (req, res) => {
    let newRecord = req.body;
    let newProduct = new Product(newRecord);
    console.log(newProduct);
    newProduct.save().then((prs) => {
        res.json(prs);
    });
});

/* app.post('/newproduct',(req,res)=>{
    let newRecord = req.body;
    Product.insert(newRecord).then((prs)=> {
        res.json(prs);
    });
});
 */

app.put('/product/:code', (req, res) => {
    let updateRecord = req.body;
    console.log(updateRecord);
    let code = req.params.code;
    Product.updateOne({ code }, updateRecord).then((prs) => {
        res.json(prs);
    });
});
