const points = require('./points/points.service.js');
const file = require('./file/file.service.js');
const poiCategory = require('./poi-category/poi-category.service.js');
const itinerary = require('./itinerary/itinerary.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(points);
  app.configure(file);
  app.configure(poiCategory);
  app.configure(itinerary);
};
