const express = require('express')

const app = express()
const multer = require('multer')
var upload = multer({ dest : 'uploads/'})



app.listen(3000, () => {
    console.log('running on 3000')
})

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended : true}))

app.post("/profile", upload.single('avatar'), function(req, res, next){
    res.send('<h1>Thanks you</h1>')
    
    console.log(req.file)
})