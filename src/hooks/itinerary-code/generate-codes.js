const defaultCode = require('../../defaults').itineraryCode;
const codeLimit = require('../../defaults').codeLimit;

module.exports = function (options = {}) {
	return async function (hook) {
		// let codesSvc = hook.service;
		// let items = await codesSvc.find({ $limit: 0 });

		// if (items.total < codeLimit) {
		
		// };
	};
};
//todo: Implement a MS for this
//MS code
// const seneca = require('seneca')()
// 	.use('seneca-amqp-transport')
// 	.client({
// 		type: 'amqp',
// 		pin: 'cmd:get,count:*',
// 		url: 'amqp://localhost:5672'
// 	});

// 	seneca.act({ cmd: 'get', count: codeLimit }, async (err, msg) => {
		// 		msg.codes.filter(c => c !== defaultCode)
		// 			.forEach((item, index) => {
		// 				codesSvc.create({
		// 					code: item
		// 				});
		// 			});
		// 		seneca.close();//todo: check if need to close seneca 
		// 	})
//End MS code
