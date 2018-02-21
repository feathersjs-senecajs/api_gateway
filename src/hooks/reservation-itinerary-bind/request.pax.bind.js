const msgManager = require('../../ms.message.manager');
const defaults = require('../../defaults');
const msPatterns = require('../../ms.patterns');
const pinBuilder = require('../../pin.builder'); 

const replyPattern = `${msPatterns.paxCodesAssignedResponse},data:`;

module.exports = function () {
	return function requestPaxBind(hook) {
		const senecaClient = hook.app.get('seneca')
			.client({
				type: 'amqp',
				pin: 'role:*',
				url: defaults.rabbitmq.url
			});
		
		msgManager.sendMessage(
			senecaClient,
			`${msPatterns.paxCodesAssignRequest},
			data:${JSON.stringify(hook.data.updatedReservation)}`,
			replyPattern
		).subscribe(console.log);
	};
};