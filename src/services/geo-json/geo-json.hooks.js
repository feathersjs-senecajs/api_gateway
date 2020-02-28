const { authenticate } = require('@feathersjs/authentication').hooks;
const restrictToRoles = require("../role-filter");
const roles = require("../../roles");

module.exports = {
	before: {
		all: [
			authenticate('jwt')
		],
		find: [restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI])],
		get: [restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI])],
		create: [restrictToRoles([roles.ADMIN, roles.OP])],
		update: [restrictToRoles([roles.ADMIN, roles.OP])],
		patch: [restrictToRoles([roles.ADMIN, roles.OP])],
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
