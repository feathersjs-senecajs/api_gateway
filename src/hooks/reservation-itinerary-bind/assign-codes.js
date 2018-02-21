module.exports = function () { 
	return async function (hook) { 
		let paxSvc = hook.app.service('pax');
		let paxItineraryBindSvc = hook.app.service('pax-itinerary-bind');

		hook.data.reservation.pax.forEach((item, index) => { 
			item.code = hook.data.itineraryCodes[index].code;
			paxSvc.update(item._id, item);
			paxItineraryBindSvc.create({
				paxCode: item.code,
				paxId: item._id,
				itineraryId: hook.data.itineraryId,
				reservationId: hook.data.reservation._id
			});
		});
	};
};
