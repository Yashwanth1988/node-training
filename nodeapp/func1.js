let  { greet, add } = require('./util')
greet()
console.log(add(40,60))


function greet1(){
    return function () {
        console.log('Hello Bro')
    }
}

greet1()()

function f1(fx){
    console.log('inside of f1..!')
    fx()
}

f1(function(){
    console.log('output of fx..!')
})