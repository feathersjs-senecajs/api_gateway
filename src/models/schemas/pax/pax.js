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
		code: {
			type: 'string'
		}
	},
	required: ['name', 'lastName']
};
