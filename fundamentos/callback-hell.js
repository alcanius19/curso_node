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
  {
    id: 4,
    salario: 5000,
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.id === id)?.salario;
  // .? es un null check operator
  if (salario) {
    callback(null, salario);
  } else {
    callback(`Salario con id ${id} no existe`);
  }
};
const id = 5;
getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("Error");
    return console.log(err);
  }
  
  getSalario(id, (err, salario) => {
    if (err) {
      return console.log(err);
    }
    console.log(empleado);
    console.log("salario : ", salario);
  });
});
