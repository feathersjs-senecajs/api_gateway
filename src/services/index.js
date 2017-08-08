const points = require('./points/points.service.js');
const file = require('./file/file.service.js');
const poiCategory = require('./poi-category/poi-category.service.js');
const itinerary = require('./itinerary/itinerary.service.js');
const poiType = require('./poi-type/poi-type.service.js');
const poiEvent = require('./poi-event/poi-event.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(points);
  app.configure(file);
  app.configure(poiCategory);
  app.configure(itinerary);
  app.configure(poiType);
  app.configure(poiEvent);
};
