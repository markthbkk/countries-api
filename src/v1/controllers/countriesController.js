const country = require('../models/countryModel');

exports.getAllCountries = async (req, res) => {
  console.log('Getting Requested Countries');

  try {
    const Countries = await country.find();
    res.status(200).send(Countries);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getSingleCountry = async (req, res) => {
  console.log('Getting Requested Country');
  console.log(req.params.id);
  try {
    const Country = await country.find({ CountryName: req.params.id });
    console.log(Country);
    res.status(200).send(Country);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllCountriesByRegion = async (req, res) => {
  console.log('Getting Requested Countries by Region');
  console.log(req.params.id);
  try {
    const Countries = await country.find({ Region: req.params.id });

    res.status(200).send(Countries);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllCountriesBySubRegion = async (req, res) => {
  console.log('Getting Requested Countries by SubRegion');
  console.log(req.params.id);
  try {
    const CountriesSub = await country.find({ Subregion: req.params.id });

    res.status(200).send(CountriesSub);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
