const config = {
    host: "localhost",
    port: 1883,
    clientId: "some-unique-id"
}

const client = require('mqtt').connect(config)

client.on('connect', () => {
    console.log('Connected')
    client.subscribe('/some/topic')
})

client.on('message', (topic, messageBuf) => {
    console.log('Topic: ' + topic)
    console.log('Message: \n' + messageBuf.toString())
})

const repeatPublishSomething = () => {
    client.publish('/some/topic', 'yoho yoho')
    setTimeout(() => repeatPublishSomething(), 5000)
}

repeatPublishSomething()