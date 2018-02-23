const MSGBROKER_CONN_TYPE = 'amqp';
const MSGBROKER_CONN_URL = 'amqp://localhost:5672';

module.exports = {
	codeLimit: 5,
	rabbitmq: {
		type: MSGBROKER_CONN_TYPE,
		url: MSGBROKER_CONN_URL,
		pin: 'role:api'
	},
	rabbitmqClient: {
		type: MSGBROKER_CONN_TYPE,
		url: MSGBROKER_CONN_URL,
		pin: 'role:*'
	},
	geoJsonGroupByField: 'class'
};
