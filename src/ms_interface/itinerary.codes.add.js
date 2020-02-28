module.exports = function (app) { 
	return function addItineraryCodes(msg, reply) { 
		const service = app.service('itinerary-code');

		msg.data.forEach(async item => {
			let aux = await service.create({
				code: item
			});
		});
		reply(null, { res: 'ok' });
	};
};