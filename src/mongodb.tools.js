function buildObjectId(objectId) {
	return `ObjectId("${objectId.toString()}")`;
}

function setObjectIdHook(options = {}) {
	return function setObjectId (hook) {
		if (!hook.params || !hook.params.query) {
			return;
		}
		const query = hook.params.query;
		const idFields = options.idFields || [];
	
		for (const f of idFields) {
			if (query[f]) {
				query[f] = `ObjectId("${query[f].toString()}")`;
			}
		}
		hook.params.query = query;
	};
}

module.exports = {
	createId: buildObjectId,
	hooks: {
		normalizeIds: setObjectIdHook
	}
};