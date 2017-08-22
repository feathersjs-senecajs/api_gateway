const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/reservation-itinerary-bind/reservation-itinerary-bind');
const getCodes = require('../../hooks/reservation-itinerary-bind/get-codes');
const assignCodes = require('../../hooks/reservation-itinerary-bind/assign-codes');

module.exports = {
	before: {
		all: [],
		find: [],
		get: [],
		create: [
			validateSchema(schema, ajv),
			getCodes(),
			assignCodes()
		],
		update: [validateSchema(schema, ajv)],//todo: unreachable
		patch: [validateSchema(schema, ajv)],//todo: unreachable
		remove: []
	},

	after: {
		all: [],
		find: [],
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
