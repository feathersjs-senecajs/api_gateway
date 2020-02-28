const _ = require('lodash');

module.exports = function () { 
	return function createUri(hook) {
		hook.data.uri = _.kebabCase(hook.data.name);
	}
};
