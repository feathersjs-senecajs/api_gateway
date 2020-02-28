module.exports = {
	properties: {
		email: {
			type: 'string',
			format: 'email',
		},
		password: {
			type: 'string'
		},
		roles: {
			type: 'array',
			items: {
				type: 'string'
			}
		},
		fullName: {
			type: 'string',
			maxLength: 100
		}
	},
	required: ['email, password', 'roles', 'fullName']
};
