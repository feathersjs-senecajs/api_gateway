const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/poi/poi');
const geoJson = require('../../hooks/geojson');

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
		find: [geoJson()],
		get: [geoJson()],
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
