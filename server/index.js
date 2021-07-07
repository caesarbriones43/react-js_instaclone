const mongoose = require("mongoose");
var colors = require("colors");
require("dotenv").config({ path: ".env" });

mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  (err, _) => {
    if (err) {
      console.log("Error de conexion!".red);
    } else {
      console.log("Conexion correcta".green);
    }
  }
);
