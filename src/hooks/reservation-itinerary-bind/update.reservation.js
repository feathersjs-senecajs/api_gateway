module.exports = function () { 
	return async function (hook) {
		const reservationSvc = hook.app.service('reservation');
		let reservation = await reservationSvc.get(hook.data.reservationId);
		let updatedReservation = await reservationSvc.patch(reservation._id, {
			itineraryId: hook.data.itineraryId
		});

		hook.data.updatedReservation = updatedReservation;
	};
};
