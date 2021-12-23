const fs = require("fs");
const colors = require("colors");

const createTableFile = async (base = 1, listar = false, hasta = 12) => {
  try {
    if (isNaN(base)) {
      throw "La base debe ser un numero";
    }

    let salida = "";
    let salidaConsola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      salidaConsola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log("=========================".green);
      console.log("\t Tabla del:", colors.blue(base));
      console.log("=========================".green);
      console.log(salidaConsola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `Tabla del ${base} creada!!`.rainbow;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTableFile,
};
