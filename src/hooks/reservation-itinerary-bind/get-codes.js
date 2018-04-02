module.exports = function () { 
	return async function (hook) { 
		let reservationSvc = hook.app.service('reservation');
		let reservation = await reservationSvc.get(hook.data.reservationId);
		let paxCount = reservation.pax.length;
		let itineraryCodesSvc = hook.app.service('itinerary-code');
		let codes = await itineraryCodesSvc.find({ $limit: paxCount });
		let aux = await itineraryCodesSvc.remove(null, {
			query: {
				code: {
					$in: codes
				}
			}
		});

		hook.data.itineraryCodes = codes.data;
		hook.data.reservation = reservation;
	};
};
