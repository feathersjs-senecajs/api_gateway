const requestCodes = require('../../hooks/itinerary-code/request.codes');
const popCodes = require('../../hooks/itinerary-code/pop-code');

module.exports = {
	before: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	},

	after: {
		all: [],
		find: [
			popCodes()
		],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [
			requestCodes()
		]
	},

	error: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	}
};
