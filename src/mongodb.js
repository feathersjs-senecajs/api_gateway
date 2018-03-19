const MongoClient = require('mongodb').MongoClient;
const Observable = require('rxjs/Rx').Observable;

module.exports = function () {
	const app = this;
	const config = app.get('mongodb');
	const connectAsObservable = Observable.bindNodeCallback(MongoClient.connect);
	const promise = connectAsObservable(config).toPromise();

	app.set('mongoClient', promise);
};