module.exports = {
	include: {
		asArray: true,
		childField: '_id',
		parentField: 'pax',
		service: 'pax',
		nameAs: 'pax',
		provider: undefined,
		select: (hook, parentItem) => parentItem.pax ? ({ _id: { $in: parentItem.pax } }) : {}
	}
};
