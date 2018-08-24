const MSGBROKER_CONN_TYPE = 'amqp';
const MSGBROKER_CONN_URL = 'amqp://192.168.20.182:3132';

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
