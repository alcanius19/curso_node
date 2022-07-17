const empleados = [
  {
    id: 1,
    nombre: "felipe",
  },
  {
    id: 2,
    nombre: "andres",
  },
  {
    id: 3,
    nombre: "jessica",
  },
  {
    id: 4,
    nombre: "daniel",
  },
];

const salarios = [
  {
    id: 1,
    salario: 3000,
  },
  {
    id: 2,
    salario: 1000,
  },
  {
    id: 3,
    salario: 4000,
  },
  
];

const getEmpleado = (id, callback) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado ? resolve(empleado) : reject(`no existe el empleado con id ${id}`);
  });
};

const getSalario = (id, callback) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    // .? es un null check operator
    salario ? resolve(salario) : reject(`no existe el salario con id ${id}`);
  });
};

const id = 3;
// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.log(err));

// getSalario(id).then((salario) => console.log(salario) )
// .catch((err) => console.log(err))

let nombre;
getEmpleado(id)
.then((empleado)=>{
  nombre = empleado;
  return getSalario(id)  // para encadenar promesas se debe utilizar el return 
 
})
.then((salario)=> {
    console.log(`el empleado ${nombre} tiene un salario de ${salario}`)
})
.catch((err) => console.log(err))