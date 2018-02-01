const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/itinerary/itinerary');
const populate = require('feathers-hooks-common').populate;
const populateSchema = require('../../models/schemas/itinerary/itinerary-vm');
const groupEvents = require('../../hooks/group.events');

const deleteEvents = require('../../hooks/delete-events');

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
		create: [validateSchema(schema, ajv)],
		update: [validateSchema(schema, ajv)],
		patch: [validateSchema(schema, ajv)],
		remove: []
	},

	after: {
		all: [],
		find: [],
		get: [
			populate({ schema: populateSchema }),
			groupEvents()
		],
		create: [],
		update: [],
		patch: [],
		remove: [deleteEvents()]
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
