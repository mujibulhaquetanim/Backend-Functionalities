import amqplib from 'amqplib';

async function sendMail(){
    const conn = await amqplib.connect('amqp://localhost');
    const channel = await conn.createChannel();

    const exchange = 'main_exchange';
    const routingKey1 = 'consumer1';
    const routingKey2 = 'consumer2';
    const mail = {
        to: 'p8o0o@example.com',
        from: 'p8o0o@example.com',
        subject: 'hello',
        body: 'hello from message queue, mujibai'
    }

    // declare exchange
    await channel.assertExchange(exchange, 'direct', {durable: true});
    // declare queue
    await channel.assertQueue(routingKey1, {durable: true});
    await channel.assertQueue(routingKey2, {durable: true});
    // bind queue to exchange
    await channel.publish(exchange, routingKey1, Buffer.from(JSON.stringify(mail)));
    await channel.publish(exchange, routingKey2, Buffer.from(JSON.stringify(mail)));
}