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
    await channel.assertQueue('email-queue1', {durable: true});
    await channel.assertQueue('email-queue2', {durable: true});
    // bind queue to exchange
    await channel.bindQueue('email-queue1', exchange, routingKey1);
    await channel.bindQueue('email-queue2', exchange, routingKey2);
    // send message
    await channel.publish(exchange, routingKey1, Buffer.from(JSON.stringify(mail)));
    await channel.publish(exchange, routingKey2, Buffer.from(JSON.stringify(mail)));
}