const mongoose = require("mongoose");
const casaSchema = require("./Casa").schema;

const userSchema = mongoose.Schema({
  Nombre: {
    type: String,
    required: true,
  },
  Apellido: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Telefono: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Casas: [
    {
      type: casaSchema,
      ref: "casa",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
