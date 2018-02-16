const defaults = require('../../defaults');
const addConnOptsPin = require('../utils/add.conn.opt.pin');

module.exports = function (options = {}) {
	return async function requestCodes(hook) {
		const seneca = hook.app.get('seneca')
			.client(connOptions(defaults.rabbitmq));
		let codesSvc = hook.service;
		let items = await codesSvc.find({ $limit: 0 });

		if (items.total < codeLimit) {
			seneca.act({ count: defaults.codeLimit }, (err, msg) => {
				// todo: Log ms status [Optional]
			});
		};
	};
};

function connOptions(opt) {
	return addConnOptsPin(opt, 'role:codes,cmd:gen');
}