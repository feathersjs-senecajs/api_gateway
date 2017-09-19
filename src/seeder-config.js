const defaults = require('./defaults');

module.exports = {
	services: defaults.itineraryCodes.map(c => new Object({
		path: 'itinerary-code',
			template: {
			code: c
		}
	}))
};
