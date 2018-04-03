const defaults = require('./defaults');
const roles = require('./roles');
const codeGenerator = require('./utils/code-gen');
const buildObjectId = require('./mongodb.tools').createId;

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
const codes = codeGenerator('111111111', 5000);

module.exports = {
	delete: false,
	disabled: true,
	services: [defaults.seedCode].concat(codes)
		.map(c => {
			return {
				path: 'itinerary-code',
				template: {
					code: c
				}
			};
		}).concat(poiCategories.map(c => new Object({
			path: 'poi-category',
			template: {
				name: c
			},
			async callback(poiCat, seed) {
				return poiTypes[poiCat.name].map(pT => seed({
					path: 'poi-type',
					template: {
						name: pT,
						category: buildObjectId(poiCat._id)
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
		}, {
			path: 'users',
			template: {
				email: 'gispiApp@gipsi.com',
				password: 'UzI1NiIsInR5cCI6ImFjY2VzcyIsInR5cGUiOiJhY2Nlc3M',
				roles: [roles.GIPSI],
				fullName: 'GipsiApp'
			}
		}])
};
