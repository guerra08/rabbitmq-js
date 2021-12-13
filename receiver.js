const amqp = require('amqplib');

async function main(){
    try {
        const connection = await amqp.connect('amqp://localhost:5673');
        const channel = await connection.createChannel();
        await channel.assertQueue("hello", { durable: false });
        channel.consume("hello", ( msg => console.log(`Message: ${msg.content}`) ), { noAck: true });
    } catch (e) {
        console.error(e);
    }
}

main();