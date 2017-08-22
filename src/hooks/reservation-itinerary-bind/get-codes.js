module.exports = function () { 
	return async function (hook) { 
		let reservationSvc = hook.app.service('reservation');
		let paxCount = (await reservationSvc.get(hook.data.reservationId))
			.pax.length;
		let itineraryCodesSvc = hook.app.service('itinerary-code');
		let codes = await itineraryCodesSvc.find({ $limit: paxCount });

		hook.data.itineraryCodes = codes;
	};
};
