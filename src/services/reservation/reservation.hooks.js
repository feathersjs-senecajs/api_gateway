const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/reservation/reservation');

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
