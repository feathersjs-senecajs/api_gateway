module.exports = {
	seedCode: '111111111',
	codeLimit: 5,
	rabbitmq: {
		type: 'amqp',
		url: 'amqp://localhost:5672',
		pin: 'role:*'
	}
};
