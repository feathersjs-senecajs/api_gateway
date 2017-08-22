module.exports = function () {
	return function (hook) {
		if (hook.result.data && Array.isArray(hook.result.data)) {
			let codeSvc = hook.service;

			hook.result.data.forEach((item, index) => { 
				codeSvc.remove(item._id);
			});
		}
	};
};
