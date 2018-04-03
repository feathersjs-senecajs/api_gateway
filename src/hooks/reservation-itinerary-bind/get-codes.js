module.exports = function () { 
	return async function (hook) { 
		let reservationSvc = hook.app.service('reservation');
		let reservation = await reservationSvc.get(hook.data.reservationId);
		let paxCount = reservation.pax.length;
		let itineraryCodesSvc = hook.app.service('itinerary-code');
		let codes = await itineraryCodesSvc.find({ $limit: paxCount })
			.then(res => res.data);
		let aux = await itineraryCodesSvc.remove(null, {
			query: {
				code: {
					$in: codes.map(c => c.code)
				}
			}
		});

		hook.data.itineraryCodes = codes;
		hook.data.reservation = reservation;
	};
};
