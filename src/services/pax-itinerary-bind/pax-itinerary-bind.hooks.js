const populate = require('feathers-hooks-common').populate;
const populateSchema = require('../../models/schemas/pax-itinerary-bind/pax-itinerary-bind-vm');

const { authenticate } = require('feathers-authentication').hooks;
const restrictToRoles = require('../role-filter');
const roles = require('../../roles');

module.exports = {
	before: {
		all: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN, roles.OP])
		],
		find: [
			restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI])
		],
		get: [
			restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI])
		],
		create: [],
		update: [],
		patch: [],
		remove: []
	},

	after: {
		all: [],
		find: [populate({ schema: populateSchema })],
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
