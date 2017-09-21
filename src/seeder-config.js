const defaults = require('./defaults');
const roles = require('./roles');

module.exports = {
	services: defaults.itineraryCodes.map(c => new Object({
		path: 'itinerary-code',
		template: {
			code: c
		}
	})).concat([{
		path: 'role',
		template: {
			name: roles.ADMIN
		}
	}, {
		path: 'role',
		template: {
			name: roles.OP
		}
	}]).concat([{
		path: 'users',
		template: {
			email: 'admin@gipsi.com',
			password: 'admin',
			roles: ['Administrator'],
			fullName: 'Admin'
		}
	}])
};
