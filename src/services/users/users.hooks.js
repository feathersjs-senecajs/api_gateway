const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/auth/user');
const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const { restrictToOwner } = require('feathers-authentication-hooks');

const { hashPassword } = require('feathers-authentication-local').hooks;
const restrict = [
	authenticate('jwt'),
	restrictToOwner({
		idField: '_id',
		ownerField: '_id'
	})
];
const restrictToRoles = require('../role-filter');
const roles = require('../../roles');

module.exports = {
	before: {
		all: [],
		find: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN])
		],
		get: [
			...restrict,
			restrictToRoles([roles.ADMIN, roles.OP])
		],
		create: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN]),
			hashPassword()
		],
		update: [
			...restrict,
			restrictToRoles([roles.ADMIN, roles.OP]),
			hashPassword()
		],
		patch: [
			...restrict,
			restrictToRoles([roles.ADMIN, roles.OP]),
			hashPassword()
		],
		remove: [
			...restrict,
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
