export function calcular(price_unitary, quatity, product){

  let subtotal = 0

  if(price_unitary === 0 || quatity === 0 || product.trim() === ''){
    alert("NINGUN CAMPO DEBE DE ESTAR VACIO")
    return null
  }
  if(price_unitary < 0 || quatity < 0){
    alert("NUMERO NEGATIVO NO DEBE DE IR")
    return null
  }

  subtotal = price_unitary * quatity

  return subtotal

}