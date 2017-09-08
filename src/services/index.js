const points = require('./points/points.service.js');
const file = require('./file/file.service.js');
const poiCategory = require('./poi-category/poi-category.service.js');
const itinerary = require('./itinerary/itinerary.service.js');
const poiType = require('./poi-type/poi-type.service.js');
const poiEvent = require('./poi-event/poi-event.service.js');
const itineraryCode = require('./itinerary-code/itinerary-code.service.js');
const geoJson = require('./geo-json/geo-json.service.js');
const pax = require('./pax/pax.service.js');
const reservation = require('./reservation/reservation.service.js');
const reservationItineraryBind = require('./reservation-itinerary-bind/reservation-itinerary-bind.service.js');
const paxInfo = require('./pax-info/pax-info.service.js');
const itineraryBundle = require('./itinerary-bundle/itinerary-bundle.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(points);
  app.configure(file);
  app.configure(poiCategory);
  app.configure(itinerary);
  app.configure(poiType);
  app.configure(poiEvent);
  app.configure(itineraryCode);
  app.configure(geoJson);
  app.configure(pax);
  app.configure(reservation);
  app.configure(reservationItineraryBind);
  app.configure(paxInfo);
  app.configure(itineraryBundle);
};
