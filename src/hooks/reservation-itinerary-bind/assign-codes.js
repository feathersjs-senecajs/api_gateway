module.exports = function () { 
	return async function (hook) { 
		let paxSvc = hook.app.service('pax');
		let paxList = await paxSvc.find();

		paxList.forEach((item, index) => { 
			item.code = hook.data.itineraryCodes[index];
			paxSvc.update(item._id, item);
		});
	};
};
