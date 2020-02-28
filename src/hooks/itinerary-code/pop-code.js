module.exports = function () {
	return function (hook) {
		if (hook.result.data && Array.isArray(hook.result.data)) {
			let codeSvc = hook.service;

			codeSvc.remove(null, {
				code: {
					$in: hook.result.data.map(item => item.code)
				}
			});
		}
	};
};
