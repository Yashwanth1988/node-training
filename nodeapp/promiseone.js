function add(a, b) {
    let p = new Promise(function(resolve, reject){
        if(a < 0 || b < 0){
            //throw new Error('Invalid Nos...!')
            reject('Invalid Numbers')
        }
        resolve(a + b)
    })
    return p
}

add(-5,6).then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})


function getlength(str){
    return new Promise(function(resolve, reject){
        resolve(str.length)
    })
}

getlength('yashwanth').then((res) => {
    console.log('length', res)
})
