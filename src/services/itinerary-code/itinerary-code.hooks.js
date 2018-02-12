const generateCodes = require('../../hooks/itinerary-code/generate-codes');
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
			generateCodes(),
			popCodes()
		],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
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
