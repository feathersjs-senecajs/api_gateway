const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/poi/poi');
const geoJson = require('../../hooks/geojson');

const populate = require('feathers-hooks-common').populate;
const populateSchema = require('../../models/schemas/poi/poi-vm');

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
			validateSchema(schema, ajv)
		],
		update: [
			restrictToRoles([roles.ADMIN, roles.OP]),
			validateSchema(schema, ajv)
		],
		patch: [
			restrictToRoles([roles.ADMIN, roles.OP]),
			validateSchema(schema, ajv)
		],
		remove: [restrictToRoles([roles.ADMIN, roles.OP])]
	},

	after: {
		all: [],
		find: [
			populate({ schema: populateSchema }),
			geoJson()
		],
		get: [
			populate({ schema: populateSchema }),
			geoJson()
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
