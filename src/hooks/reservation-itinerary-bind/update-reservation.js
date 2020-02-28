module.exports = function () { 
	return async function (hook) {
		let reservationSvc = hook.app.service('reservation');
		let reservation = hook.data.reservation;

		reservationSvc.patch(reservation._id, {
			pax: reservation.pax.map(p => p._id),
			itineraryId: hook.data.itineraryId
		});
	};
};
