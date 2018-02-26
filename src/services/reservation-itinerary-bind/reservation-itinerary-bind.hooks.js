const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/reservation-itinerary-bind/reservation-itinerary-bind');
const updateReservation = require('../../hooks/reservation-itinerary-bind/update.reservation');
const requestPaxBind = require('../../hooks/reservation-itinerary-bind/request.pax.bind');

const { authenticate } = require('feathers-authentication').hooks;
const restrictToRoles = require('../role-filter');
const roles = require('../../roles');

const { authenticate } = require('feathers-authentication').hooks;
const restrictToRoles = require('../role-filter');
const roles = require('../../roles');

module.exports = {
	before: {
		all: [
			authenticate('jwt'),
			restrictToRoles([roles.ADMIN, roles.OP])
		],
		find: [],
		get: [],
		create: [
			validateSchema(schema, ajv),
			updateReservation()
		],
		update: [validateSchema(schema, ajv)],//todo: unreachable
		patch: [validateSchema(schema, ajv)],//todo: unreachable
		remove: []
	},

	after: {
		all: [],
		find: [],
		get: [],
		create: [
			requestPaxBind()
		],
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
