const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const { mongoKeys, iff, isProvider } = require('feathers-hooks-common');
const schema = require('../../models/schemas/pax/pax');

const { authenticate } = require('feathers-authentication').hooks;
const restrictToRoles = require('../role-filter');
const roles = require('../../roles');

const ObjectID = require('mongodb').ObjectID;

module.exports = {
	before: {
		all: [authenticate('jwt')],
		find: [
			restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI]),
			mongoKeys(ObjectID, ['_id'])
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
			restrictToRoles([roles.ADMIN, roles.OP]),
			validateSchema(schema, ajv)
		],
		remove: [restrictToRoles([roles.ADMIN, roles.OP])]
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
