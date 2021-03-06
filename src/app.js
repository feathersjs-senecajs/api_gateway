const path = require("path");
const favicon = require("serve-favicon");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const configuration = require('@feathersjs/configuration');

const socketio = require('@feathersjs/socketio');
const rest = require('@feathersjs/express/rest');

const middleware = require("./middleware");
const services = require("./services");
const appHooks = require("./app.hooks");

const seeder = require("feathers-seeder");
const seederConfig = require("./seeder-config");

const authentication = require("./authentication");

const mongodb = require("./mongodb");

const seneca = require('seneca')()
	.use('seneca-amqp-transport');
const senecaConfig = require('./seneca');

const app = express(feathers());

// Load app configuration
app.configure(configuration(path.join(__dirname, "..")));
app.configure(seeder(seederConfig));
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get("public"), "favicon.ico")));
// Host the public folder
app.use("/", express.static(app.get("public")));

app.set('seneca', seneca);

app.set('seneca', seneca);

app.configure(socketio());
app.configure(rest());

const appPromise = mongodb(app).then(client => {
	app.set('mongoClient', client);

	app.configure(authentication);

	// Set up our services (see `services/index.js`)
	app.configure(services);

// Configure middleware (see `middleware/index.js`) - always has to be last
	app.configure(middleware);
	app.configure(senecaConfig);
	app.hooks(appHooks);

	app.seed();
	return app;
});

module.exports = appPromise;
