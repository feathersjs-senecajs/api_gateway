/* eslint-disable no-unused-vars */
class Service {
	constructor(options) {
		this.options = options || {};
	}

	find(params) {
		return Promise.resolve([]);
	}

	get(id, params) {
		return Promise.resolve({
			id, text: `A new message with ID: ${id}!`
		});
	}

	create(data, params) {
		let reservationSvc = this.app.service('reservation');
		let reservation = reservationSvc.get(data.reservationId);

		reservation.itineraryId = data.itineraryId;
		reservationSvc.update(reservation._id, reservation);
		return Promise.resolve(data);
	}

	update(id, data, params) {
		return Promise.resolve(data);
	}

	patch(id, data, params) {
		return Promise.resolve(data);
	}

	remove(id, params) {
		return Promise.resolve({ id });
	}

	setup(app, path) {
		this.app = app;
	}
}

module.exports = function (options) {
	return new Service(options);
};

module.exports.Service = Service;
