export function suma(numero1, numero2){
  return numero1 + numero2
}

export function restar(numero1, numero2){
  return numero1 - numero2
}

export function division(numero1, numero2){
  
  var resul;

  if(numero1 == 0){
    resul = 0;
  }
  else{
    resul = numero1 / numero2
  }
  
  return resul
}

export function multi(numero1, numero2){
  return numero1*numero2
}
