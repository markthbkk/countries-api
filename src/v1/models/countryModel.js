const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema(
  {
    CountryName: {
      type: String,
      required: true,
    },
    CountryCode: {
      type: String,
      required: true,
    },
    Region: {
      type: String,
      required: false,
    },
    Subregion: {
      type: String,
      required: false,
    },
    Capital: {
      type: Array,
      required: false,
    },
    CapitalLatLng: {
      type: Array,
      required: false,
    },
    Population: {
      type: Number,
      required: false,
    },
    AreaKM2: {
      type: Number,
      required: false,
    },
    FlagImage: {
      type: String,
      required: false,
    },
    Languages: {
      type: Object,
      required: false,
    },
    CorruptionIndex: {
      type: Number,
      required: false,
    },
    IndependentJudiciary: {
      type: Number,
      required: false,
    },
    FreeFairElections: {
      type: Number,
      required: false,
    },
    EnvironmentalHealthProtection: {
      type: Number,
      required: false,
    },
    EnvironmentalPerformance: {
      type: Number,
      required: false,
    },
    FreedomOfExpression: {
      type: Number,
      required: false,
    },
    GenderInequality: {
      type: Number,
      required: false,
    },
    QualityOfGovernment: {
      type: Number,
      required: false,
    },
    GDPPerCapita2011: {
      type: Number,
      required: false,
    },
    ElectoralIntegrity: {
      type: Number,
      required: false,
    },
    PressFreedom: {
      type: Number,
      required: false,
    },
    HealthDevelopmentIndex: {
      type: Number,
      required: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
