 const getUsuario = (id, callback)=>{
    const user = {
    
        id,
        nombre:"felipe",
    }
    
    setTimeout(()=>{
        callback(user)
    },1500)

 }

 getUsuario(10,({id,nombre})=>{
   console.log(nombre)
 });