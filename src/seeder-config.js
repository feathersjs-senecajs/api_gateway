const defaults = require('./defaults');
const roles = require('./roles');

const poiCategories = [
	'Accommodation',
	'Transportation',
	'Experiences'
];
const poiTypes = {
	[poiCategories[0]]: [
		'Hotel',
		'Casa Particular'
	],
	[poiCategories[1]]: [
		'Renta de Autos'
	],
	[poiCategories[2]]: [
		'Wifi',
		'Clases de Salsa'
	]
};

module.exports = {
	delete: true,
	services: defaults.itineraryCodes.map(c => new Object({
		path: 'itinerary-code',
		template: {
			code: c
		}
	})).concat(poiCategories.map(c => new Object({
		path: 'poi-category',
		template: {
			name: c
		},
		async callback(poiCat, seed) {
			console.info(`This is my name ${poiCat.name} -- ${poiCat._id}`);
			return poiTypes[poiCat.name].map(pT => seed({
				path: 'poi-type',
				template: {
					name: pT,
					category: poiCat._id
				}
			}));
		}
	}))).concat([{
		path: 'role',
		template: {
			name: roles.ADMIN
		}
	}, {
		path: 'role',
		template: {
			name: roles.OP
		}
	}, {
		path: 'role',
		template: {
			name: roles.GIPSI
		}
	}]).concat([{
		path: 'users',
		template: {
			email: 'admin@gipsi.com',
			password: 'admin',
			roles: [roles.ADMIN, roles.OP],
			fullName: 'Admin'
		}
	}])
};
