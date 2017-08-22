module.exports = {
	include: {
		asArray: true,
		service: 'pax',
		nameAs: 'pax',
		select: (hook, parentItem) => {
			parentItem.pax.forEach(p => { _id: p });
		}
	}
};
