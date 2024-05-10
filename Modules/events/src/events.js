const event = require('events');

const eventEmitter = new event.EventEmitter();

eventEmitter.on('event', () => {
    console.log('An event occurred!');
});

// Trigger the event
eventEmitter.emit('event');