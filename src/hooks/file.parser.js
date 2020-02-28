const dauria = require('dauria');

module.exports = function () { 
	return function (hook) { 
		if (!hook.data.uri && hook.params.file) {
			const file = hook.params.file;
			const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);

			hook.data = { uri: uri };
		}
	};
};
