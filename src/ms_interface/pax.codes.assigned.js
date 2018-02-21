const msgManager = require('../ms.message.manager');

module.exports = function (app) { 
	return function (msMsg, reply) { 
		const msg = msgManager.receiveMessage(msMsg);
		const paxSvc = app.service('pax');
		const paxItineraryBindSvc = app.service('pax-itinerary-bind');

		msg.data.pax.forEach(p => {
			paxSvc.patch(p._id, p);
			paxItineraryBindSvc.create({
				paxId: p._id,
				paxCode: p.code,
				itineraryId: msg.data.itineraryId,
				reservationId: msg.data._id
			});
		});
		reply(null, { msg: 'ok' });
	};
};