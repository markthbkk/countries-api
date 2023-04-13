const express = require('express');
const countriesController = require('../controllers/countriesController');

const router = express.Router();

router.route('/api/v1/countries').get(countriesController.getAllCountries);

router.route('/api/v1/countries/:id').get(countriesController.getSingleCountry);

router
  .route('/api/v1/countries/region/:id')
  .get(countriesController.getAllCountriesByRegion);

router
  .route('/api/v1/countries/subregion/:id')
  .get(countriesController.getAllCountriesBySubRegion);

module.exports = router;
