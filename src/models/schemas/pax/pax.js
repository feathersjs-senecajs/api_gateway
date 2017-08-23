module.exports = {
	properties: {
		name: {
			type: 'string',
			maxLength: 50
		},
		lastName: {
			type: 'string',
			maxLength: 50
		},
		email: {
			type: 'string',
			format: 'email'
		},
		code: {
			type: 'string'
		}
	},
	required: ['name', 'lastName', 'email']
};
