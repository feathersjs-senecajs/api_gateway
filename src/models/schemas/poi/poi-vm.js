module.exports = {
	include: [{
		service: 'poi-category',
		nameAs: 'poiCategory',
		parentField: 'category',
		childField: '_id'
	}, {
		service: 'poi-type',
		nameAs: 'poiType',
		parentField: 'type',
		childField: '_id'
	}]
};
