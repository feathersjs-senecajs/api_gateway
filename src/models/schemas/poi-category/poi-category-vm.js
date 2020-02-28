module.exports = {
	include: {
		service: 'poi-type',
		nameAs: 'poi_types',
		parentField: '_id',
		childField: 'category',
		asArray: true,
		provider: undefined
	}
};
