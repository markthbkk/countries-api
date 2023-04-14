const express = require('express');
const countriesController = require('../controllers/countriesController');

const router = express.Router();

router.route('/api/v1/countries').get(countriesController.getAllCountries);

router.route('/api/v1/countries/:id').get(countriesController.getSingleCountry);

router
  .route('/api/v1/countries/region/:id')
  .get(countriesController.getAllCountriesByRegion);

router
  .route('/api/v1/countries/regions/distinct')
  .get(countriesController.getDistinctRegions);

router
  .route('/api/v1/countries/subregion/:id')
  .get(countriesController.getAllCountriesBySubRegion);


  router
    .route('/api/v1/countries/subregions/:id')
    .get(countriesController.getSubRegionsInRegion);

module.exports = router;
