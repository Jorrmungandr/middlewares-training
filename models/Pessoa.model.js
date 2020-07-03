const { Schema, model } = require('mongoose');

const PessoasSchema = new Schema({
  name: { type: String, required: true },
  cpf: { type: Number, required: true, index: true },
  age: { type: Number, default: 0 },
}, {
  timestamps: true,
});

module.exports = model('Pessoas', PessoasSchema);
