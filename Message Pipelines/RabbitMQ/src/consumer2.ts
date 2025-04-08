import amqplib from 'amqplib';

async function consumer2() {
    try {
        const conn = await amqplib.connect('amqp://localhost');
        const channel = await conn.createChannel();
    
        await channel.assertQueue('email-queue2', {durable: true});
    
        channel.consume('email-queue2', (msg) => {
            if (msg !== null) {
                console.log("Message Received:", JSON.parse(msg.content.toString()));
                channel.ack(msg);
            }
        });
    } catch (error) {
        console.log(error);
    }
}

consumer2();