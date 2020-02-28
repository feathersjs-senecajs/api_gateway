function buildObjectId(objectId) {
	return ObjectIdFormat(objectId.toString());
}

function setObjectIdHook(options = {}) {
	return function setObjectId (hook) {
		if (!hook.params || !hook.params.query) {
			return;
		}
		const query = hook.params.query;
		const idFields = options.idFields || {};
	
		for (const f of Object.keys(idFields)) {
			if (query[f]) {
				if (idFields[f].isArray) {
					query[f] = query[f].map(id => ObjectIdFormat(id));
				}
				else {
					query[f] = ObjectIdFormat(query[f].toString());
				}
			}
		}
		hook.params.query = query;
	};
}

function ObjectIdFormat(id) {
	return `Object("${id}")`;
}

module.exports = {
	createId: buildObjectId,
	hooks: {
		normalizeIds: setObjectIdHook
	},
	idFormatter: ObjectIdFormat
};