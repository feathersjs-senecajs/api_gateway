const defaultCode = require('../../defaults').itineraryCode;
const codeLimit = require('../../defaults').codeLimit;
const seneca = require('seneca')()
	.use('seneca-amqp-transport')
	.client({
		type: 'amqp',
		pin: 'cmd:get,count:*',
		url: 'amqp://localhost:5672'
	});

module.exports = function (options = {}) {
	return function (hook) {
		seneca.act({ cmd: 'get', count: 3 }, async (err, msg) => {
			let codesSvc = hook.app.service('itinerary-code');
			let items = await codesSvc.find({ $limit: 0 });

			if (items.total < codeLimit) {
				msg.codes.filter(c => c !== defaultCode)
					.forEach((item, index) => {
						codesSvc.create({
							code: item
						});
					});
			}
		});
	};
};
