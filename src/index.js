/* eslint-disable no-console */
const logger = require("winston");
const appPromise = require("./app");

appPromise.then(app => {
	const port = app.get("port");
	const server = app.listen(port);

	process.on("unhandledRejection", (reason, p) =>
		logger.error("Unhandled Rejection at: Promise ", p, reason)
	);

	server.on("listening", () =>
		logger.info(
			`Feathers application started on ${app.get("host")}:${port}`
		)
	);
});
