const seneca = require('seneca')()
	.use('seneca-amqp-transport')
	.client({
		type: 'amqp',
		pin: '',
		url: 'amqp://localhost:5672'
	});

module.exports = function () {
	return function (hook) {
		seneca.act({}, async (err, msg) => {
			let geoJSONSvc = hook.app.service('geo-json');
			let data = await geoJSONSvc.find();
			let currentGeoJSON = msg.geoJSON;

			currentGeoJSON._id = data.data[0]._id;
			geoJSONSvc.update(currentGeoJSON);
		});
	};
};
