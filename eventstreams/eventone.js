const events = require('events')

let eventEmitter = new events.EventEmitter()


eventEmitter.on('Hello', function(data = "default"){
    console.log('Hello Event Handler...!', data)
})

eventEmitter.on('PSL', function(data = "default"){
    console.log('PSL Event Handler...!', data)
})

eventEmitter.emit("Hello")
eventEmitter.emit("PSL")
eventEmitter.emit("Hello", "Yashwanth")