const deadpool = {
    nombre:"felipe",
    apellido:"martinez",
    poder: "regeneracion",
    getNombre (params) {
        return `${this.nombre} ${this.apellido}`;
    }
}

console.log(deadpool.getNombre())


const {nombre,apellido,poder} = deadpool;
const otros = ['pera','papa','maiz'];
const [, ,h3] = otros;
console.log("🚀 ~ file: desestructuracion.js ~ line 18 ~ h3", h3)
