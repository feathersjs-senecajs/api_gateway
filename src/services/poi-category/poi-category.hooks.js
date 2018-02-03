const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/poi-category/poi-category');
const populate = require('feathers-hooks-common').populate;
const populateSchema = require('../../models/schemas/poi-category/poi-category-vm');
const bundle = require('../../hooks/itinerary/bundle');

const { authenticate } = require('feathers-authentication').hooks;
const restrictToRoles = require('../role-filter');
const roles = require('../../roles');

module.exports = {
	before: {
		all: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN, roles.OP])
		],
		find: [],
		get: [],
		create: [validateSchema(schema, ajv)],
		update: [validateSchema(schema, ajv)],
		patch: [validateSchema(schema, ajv)],
		remove: []
	},

	after: {
		all: [],
		find: [populate({ schema: populateSchema })],
		get: [populate({ schema: populateSchema })],
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
