const { Queue } = require('bullmq');

const notificationQueue = new Queue('msg-queue', {
    connection: {
        host: '127.0.0.1',
        port: 6379
    }
});

async function init() {
    const result = await notificationQueue.add('email to mujibai', {
        email: 'mujibai@gmail.com',
        subject: 'hello',
        body: 'hello from message queue, mujibai'
    });
    console.log('Job added to Queue', result.id);
}

init();