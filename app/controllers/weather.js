const express = require('express'),
  request = require('request'),
  router = express.Router(),
  WeatherAPI = require('node-openweathermap');

const apiKey = '602d10eaa16056b9fe71e9d6693e44db';

module.exports = function (app) {
  app.use('/weather', router);
};
let weather = new WeatherAPI(apiKey);
weather.getWeather({
  location: req.param('zipCode') + ',us',
  temp_unit: 'F'
})
.then(response => {
  res.response = {
    title "Weather for ' + response.name,
    weather: response.main.temp + 'F - ' + response.temp, */
router.get('/:zipCode', function (req, res, next) {
res.send(req.param('zipCode'));
});
