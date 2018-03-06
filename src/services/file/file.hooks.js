const fileToURIParser = require('../../hooks/file.parser');
const clearResponse = require('../../hooks/file.response');
const logger = require('../../hooks/logger');

const { authenticate } = require('feathers-authentication').hooks;
const restrictToRoles = require('../role-filter');
const roles = require('../../roles');

module.exports = {
	before: {
		all: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI]),
			logger()
		],
		find: [],
		get: [],
		create: [fileToURIParser()],
		update: [],
		patch: [],
		remove: []
	},

	after: {
		all: [],
		find: [],
		get: [],
		create: [clearResponse()],
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
