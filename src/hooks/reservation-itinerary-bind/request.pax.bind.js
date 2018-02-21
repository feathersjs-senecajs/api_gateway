const msgManager = require('../../ms.message.manager');
const defaults = require('../../defaults');
const msPatterns = require('../../ms.patterns'); 

const replyPattern = `${msPatterns.paxCodesAssignedResponse},data:`;

module.exports = function () {
	return function requestPaxBind(hook) {
		const senecaClient = hook.app.get('seneca')
			.client(defaults.rabbitmq);
		
		msgManager.sendMessage(
			senecaClient,
			`${msPatterns.paxCodesAssignRequest},data:${hook.data.updatedReservation}`,
			replyPattern
		).subscribe(console.log);
	};
};