const fileToURIParser = require('../../hooks/file.parser');
const clearResponse = require('../../hooks/file.response');
const logger = require('../../hooks/logger');

module.exports = {
	before: {
		all: [logger()],
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
