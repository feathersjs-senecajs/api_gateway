// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
	return function (hook) {
		let events = hook.app.service('poi-event');

		hook.result.forEach(item => {
			item.events.forEach(event => {
				event.eventIds.forEach(id => {
					events.remove(id);
				});
			});
		});
	};
};
