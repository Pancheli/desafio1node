const { registrar, leer } = require('./operaciones');

const arg = process.argv.slice(2)
const [operacion, nombre, edad, animal, color, enfermedad] = arg

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad)
}

if (operacion === "leer") {
    leer()
}