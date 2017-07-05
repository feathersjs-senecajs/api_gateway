const points = require('./points/points.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(points);
};
