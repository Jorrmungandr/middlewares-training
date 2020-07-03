const { Schema, model } = require('mongoose');

const ExamplesSchema = new Schema({
  name: { type: String, required: true},
  description: { type: String, default: 'This example has no description' },
}, {
  timestamps: true,
})

module.exports = model('Examples', ExamplesSchema)