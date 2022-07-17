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

  
  const id = 4;

  const getInfoEmpleado = async (id)=>{
      
      try {
          const empleado = await getEmpleado(id);
          const salario = await getSalario(id)
          return `el salario de ${empleado} es ${salario}`          
     } catch (error) {
        throw error;
     }
  }


  getInfoEmpleado(id).then((msg) => {
        console.log(msg)
  }).catch(error => console.log(error))