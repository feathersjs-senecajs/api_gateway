const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/itinerary/itinerary');
const populate = require('feathers-hooks-common').populate;
const populateSchema = require('../../models/schemas/itinerary/itinerary-vm');
const groupEvents = require('../../hooks/group.events');

module.exports = {
	before: {
		all: [],
		find: [],
		get: [],
		create: [validateSchema(schema, ajv)],
		update: [validateSchema(schema, ajv)],
		patch: [validateSchema(schema, ajv)],
		remove: []
	},

	after: {
		all: [],
		find: [
			populate({ schema: populateSchema }),
			groupEvents()
		],
		get: [
			populate({ schema: populateSchema }),
			groupEvents()
		],
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
