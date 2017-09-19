module.exports = function () { 
	return async function (hook) { 
		let paxSvc = hook.app.service('pax');

		hook.data.reservation.pax.forEach((item, index) => { 
			item.code = hook.data.itineraryCodes[index].code;
			paxSvc.update(item._id, item);
		});
	};
};
 