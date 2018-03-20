const MongoClient = require('mongodb').MongoClient;
const Observable = require('rxjs/Rx').Observable;

module.exports = function (app) {
	const config = app.get('mongodb');
	const connectAsObservable = Observable.bindNodeCallback(MongoClient.connect);
	return connectAsObservable(config).toPromise();
};