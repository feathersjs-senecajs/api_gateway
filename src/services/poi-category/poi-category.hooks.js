const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/poi-category/poi-category');
const populate = require('feathers-hooks-common').populate;
const populateSchema = require('../../models/schemas/poi-category/poi-category-vm');
const bundle = require('../../hooks/itinerary/bundle');
const createUri = require('../../hooks/shared/uri.creator');

const { authenticate } = require('feathers-authentication').hooks;
const restrictToRoles = require('../role-filter');
const roles = require('../../roles');

module.exports = {
	before: {
		all: [authenticate('jwt')],
		find: [restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI])],
		get: [restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI])],
		create: [
			restrictToRoles([roles.ADMIN, roles.OP]),
			validateSchema(schema, ajv),
			createUri()
		],
		update: [
			restrictToRoles([roles.ADMIN, roles.OP]),
			validateSchema(schema, ajv),
			createUri()
		],
		patch: [
			restrictToRoles([roles.ADMIN, roles.OP]),
			validateSchema(schema, ajv)
		],
		remove: [restrictToRoles([roles.ADMIN, roles.OP])]
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
