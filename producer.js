const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

const run = async() => {
    await producer.connect();
    await producer.send({
        topic: 'news',
        messages: [
            { value: '{"id":' + Math.floor(Math.random()*1000000) + 
            ', "message":"Hello from nodejs"}'}
        ]   
    });
    await producer.disconnect();
};

run();