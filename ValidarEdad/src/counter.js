export function validaredad(edad){

  let mensaje = ''

  if(edad >= 18){
    mensaje = "!Acceso Permitido¡"
  }else{
    mensaje = "¡Acceso Denegado!"
  }

  return mensaje

}