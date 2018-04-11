const msgManager = require('../ms.message.manager');

module.exports = function (app) { 
	return async function (msMsg, reply) { 
		const msg = msgManager.receiveMessage(msMsg);
		const reservation = msg.input;
		const paxSvc = app.service('pax');
		const paxItineraryBindSvc = app.service('pax-itinerary-bind');
		const reservationSvc = app.service('reservation');

		for (const p of msg.data) {
			await paxSvc.patch(p._id, p);
			await paxItineraryBindSvc.create({
				paxId: p._id,
				paxCode: p.code,
				itineraryId: reservation.itineraryId,
				reservationId: reservation._id
			});
		}
		reservation._id = reservation.apiRefId;
		delete reservation.apiRefId;
		reservationSvc.emit('bound', {
			data: reservation
		});
		reply();
	};
};