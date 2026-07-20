export function conversion(dato, cantidad){
    
    let valor

    if(dato == 1){
        valor = (cantidad - 32) * 0.5556
    }else{
        valor = (cantidad * 1.8) + 32
    }

    return valor
}
