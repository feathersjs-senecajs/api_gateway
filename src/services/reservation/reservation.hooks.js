const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/reservation/reservation');
const populate = require('feathers-hooks-common').populate;
const populateSchema = require('../../models/schemas/reservation/reservation-vm');

const { authenticate } = require('@feathersjs/authentication').hooks;
const restrictToRoles = require('../role-filter');
const roles = require('../../roles');

module.exports = {
	before: {
		all: [authenticate('jwt')],
		find: [
			restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI])
		],
		get: [
			restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI])
		],
		create: [
			restrictToRoles([roles.ADMIN, roles.OP]),
			validateSchema(schema, ajv)
		],
		update: [
			restrictToRoles([roles.ADMIN, roles.OP]),
			validateSchema(schema, ajv)
		],
		patch: [
			restrictToRoles([roles.ADMIN, roles.OP])
		],
		remove: [restrictToRoles([roles.ADMIN, roles.OP])]
	},

	after: {
		all: [],
		find: [],
		get: [
			populate({ schema: populateSchema })
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
