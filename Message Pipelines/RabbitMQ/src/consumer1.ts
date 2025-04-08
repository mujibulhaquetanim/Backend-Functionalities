import amqplib from 'amqplib';

async function consumer1() {
    try {
        const conn = await amqplib.connect('amqp://localhost');
        const channel = await conn.createChannel();
    
        await channel.assertQueue('email-queue1', {durable: true});
    
        channel.consume('email-queue1', (msg) => {
            if (msg !== null) {
                console.log("Message Received:", msg.content.toString());
                channel.ack(msg);
            }
        });
    } catch (error) {
        console.log(error);
    }
}

consumer1();