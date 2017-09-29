const restrictToRoles = require('feathers-authentication-hooks').restrictToRoles; 

module.exports = function (roles) { 
	return restrictToRoles({
		roles: roles,
		fieldName: 'roles'
	});
};
