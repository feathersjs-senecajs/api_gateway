const msgManager = require('../../ms.message.manager');
const defaults = require('../../defaults');
const msPatterns = require('../../ms.patterns');
const pinBuilder = require('../../pin.builder'); 

const replyPattern = `${msPatterns.paxCodesAssignedResponse},data:`;

module.exports = function () {
	return async function requestPaxBind(hook) {
		const paxSvc = hook.app.service('pax');
		const senecaClient = hook.app.get('seneca')
			.client(defaults.rabbitmqClient);
		const paxIdList = hook.data.updatedReservation.pax;
		
		hook.data.updatedReservation.pax = await getPax(paxSvc, paxIdList);
		hook.data.updatedReservation.apiRefId = hook.data.updatedReservation._id;
		delete hook.data.updatedReservation._id;
		msgManager.sendMessage(
			senecaClient,
			msPatterns.paxCodesAssignRequest, {
				data: hook.data.updatedReservation,
				input: 'data'
			},
			replyPattern
		);
	};

	function getPax(paxSvc, paxIdList) {
		return paxSvc.find({
			query: {
				_id: {
					$in: paxIdList
				}
			}
		}).then(res => res.data);
	}
};