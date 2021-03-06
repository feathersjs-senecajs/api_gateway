const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/auth/user');
const { authenticate } = require('@feathersjs/authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const { hashPassword } = require('@feathersjs/authentication-local').hooks;
const restrictToRoles = require('../role-filter');
const roles = require('../../roles');

module.exports = {
	before: {
		all: [authenticate('jwt'),
		restrictToRoles([roles.ADMIN, roles.OP])],
		find: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN])
		],
		get: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN, roles.OP])
		],
		create: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN]),
			hashPassword()
		],
		update: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN, roles.OP]),
			hashPassword()
		],
		patch: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN, roles.OP]),
			hashPassword()
		],
		remove: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN])
		]
	},

	after: {
		all: [
			commonHooks.when(
				hook => hook.params.provider,
				commonHooks.discard('password')
			)
		],
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
