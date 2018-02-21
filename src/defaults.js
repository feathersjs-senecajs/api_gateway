module.exports = {
	codeLimit: 5,
	rabbitmq: {
		type: 'amqp',
		url: 'amqp://localhost:5672',
		pin: 'role:*'
	},
	geoJsonGroupByField: 'typeUri'
};
