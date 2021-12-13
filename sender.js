const { Command } = require('commander');
const amqp = require('amqplib');

async function main() {
    try {
        let message = "Hello, world!";
        const program = new Command();

        program.option("-m, --message <message>", "message to be sent")
        program.parse(process.argv);
        const options = program.opts();
        if(options.message) message = options.message;

        const connection = await amqp.connect('amqp://localhost:5673');
        const channel = await connection.createChannel();
        await channel.assertQueue("hello", { durable: false });
        const sent = channel.sendToQueue("hello", Buffer.from(message));
        console.log(`Message has${!sent ? ' not ' : ' '}been sent.`);

        setTimeout(() => {
            connection.close();
            process.exit(0);
        }, 1000);
    } catch (e) {
        console.error(e);
    }
}

main();