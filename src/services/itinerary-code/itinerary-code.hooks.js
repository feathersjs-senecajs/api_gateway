const generateCodes = require('../../hooks/itinerary-code/generate-codes');
const popCodes = require('../../hooks/itinerary-code/pop-code');
const iff = require('feathers-hooks-common').iff;
const isProvider = require('feathers-hooks-common').isProvider;

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
		find: [iff(isProvider('external'), generateCodes(), popCodes())],
		get: [iff(isProvider('external'), generateCodes(), popCodes())],
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
