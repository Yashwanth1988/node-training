const { carService } = require('./car.service')

console.log(carService.findAll())


console.log(carService.findByName(1))
console.log(carService.remove(1))
