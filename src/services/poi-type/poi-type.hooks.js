const ajv = require('ajv');
const validateSchema = require('feathers-hooks-common').validateSchema;
const schema = require('../../models/schemas/poi-type/poi-type');
const createUri = require('../../hooks/shared/uri.creator');

const { authenticate } = require("feathers-authentication").hooks;
const restrictToRoles = require("../role-filter");
const roles = require("../../roles");

const normalizeIds = require("../../mongodb.tools").hooks.normalizeIds;

module.exports = {
	before: {
		all: [authenticate("jwt")],
		find: [
			restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI]),
			normalizeIds({ idFields: { category: {} } })
		],
		get: [restrictToRoles([roles.ADMIN, roles.OP, roles.GIPSI])],
		create: [
			restrictToRoles([roles.ADMIN, roles.OP]),
			validateSchema(schema, ajv),
			createUri()
		],
		update: [
			restrictToRoles([roles.ADMIN, roles.OP]),
			validateSchema(schema, ajv),
			createUri()
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
