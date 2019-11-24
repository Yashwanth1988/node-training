const cars = require('./store')


function findAll(){
    return cars
}

function findByName(code){
    return cars.find(function(car) { return car.id === code })
}

function remove(code){
    return cars.filter(car => car.id !== code)

}


 module.exports.carService = {
     findAll,
     findByName,
     remove
 }