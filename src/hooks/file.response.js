module.exports = function () {
	return function (hook) { 
		delete hook.result.uri;
	};
};
