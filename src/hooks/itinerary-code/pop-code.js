module.exports = function () {
	return function (hook) {
		if (hook.result.data && hook.result.data.constructor === Array) {
			let codeSvc = hook.app.service('itinerary-code');

			hook.result.data.forEach((item, index) => { 
				codeSvc.remove(item._id);
			});
		}
	};
};
