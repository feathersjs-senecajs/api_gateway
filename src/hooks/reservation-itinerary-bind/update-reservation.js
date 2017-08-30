module.exports = function () { 
	return async function (hook) { 
		let reservationSvc = hook.app.service('reservation');
		let reservation = await reservationSvc.get(hook.data.reservationId);

		reservation.itineraryId = hook.data.itineraryId;
		reservationSvc.update(reservation._id, reservation);
	};
};
