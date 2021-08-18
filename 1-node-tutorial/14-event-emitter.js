// Event Driven Programming
// on - listen for an event
// emit - emit an event
// Order of the code matters, system executes sequentially
// if emit is first before on, the emit wont trigger the on callback
// can add arguments in events
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data received user ${name} with id: ${id}`);
})
// Event 'on' can have multiple callback functions
customEmitter.on('response', ()=>{
    console.log('some other logic here ');
})

customEmitter.emit('response', 'john', 34)
