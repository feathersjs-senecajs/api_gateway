module.exports = {
	properties: {
		name: {
			type: 'string',
			maxLength: 50
		},
		lastName: {
			type: 'string',
			maxLength: 50
		}
	},
	required: ['name', 'lastName']
};
