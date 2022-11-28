const validarDNI = (dni)=>{
    return new Promise((res)=>{
      if(dni.length!==8){
        res(false);
      }
      else{
          let regExp = new RegExp(/^[0-9]*$/)
          let resultadoDNI = regExp.test(dni)
          res(resultadoDNI) 
      }
    })
}

  const validarNombre = (nombre)=>{
    return new Promise((res)=>{
      if(nombre.length>2 && nombre.length<100 ){
        res(true);
      }
      else {
        res(false)
      }
    })
  }

const validarRol = (rol)=>{
    return new Promise((res)=>{
        if(rol=='Doctor' || rol=='Secretaria' || rol=='Apoderado'){
            res(true)
        }
        else{
            res(false)
        }
    })
}
 
// const validarFecha = (fecha)=>{
//     return new Promise((res)=>{

//           let regExp = new RegExp(/^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/)
//           let resultadoFECHA = regExp.test(fecha)
//           res(resultadoFECHA) 
//     })
// }


const validarEnfermedadActual = (enfermedadActual)=>{
    return new Promise((res)=>{
      if(enfermedadActual.length>2 && enfermedadActual.length<50 ){
        res(true);
      }
      else {
        res(false)
      }
    })
}

  const validarDiagnostico = (diagnostico)=>{
    return new Promise((res)=>{
      if(diagnostico.length>2 && diagnostico.length<500 ){
        res(true);
      }
      else {
        res(false)
      }
    })
  }

export {
      validarDNI,
      validarNombre,
      validarRol,
      validarEnfermedadActual,
      validarDiagnostico
}