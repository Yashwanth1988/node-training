function ucase(str, cb){
    let res = str.toUpperCase()
    cb(res)
}

ucase('hello', function(res) {
    console.log(res)
})


console.log('Hello world..!')