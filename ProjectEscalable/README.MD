Nivel 1: El registro de un producto individual
En esta primera fase, vamos a crear la base para capturar un solo producto con su precio y cantidad, calculando su subtotal.

El Problema (Fase 1):
Debes crear la lógica para que el usuario ingrese el nombre del producto, su precio unitario y la cantidad comprada. Al hacer clic en el botón, se debe calcular el subtotal (precio × cantidad) y mostrar un resumen en la pantalla.

Requisitos:
Crea una función independiente llamada calcularSubtotal(precio, cantidad) que devuelva el resultado de la multiplicación.

Al presionar el botón "Calcular":

Lee los tres campos del formulario.

Convierte el precio y la cantidad a números.

Llama a tu función calcularSubtotal.

Muestra el resultado en el <span> con el siguiente formato exacto:
"Llevas [cantidad] de [producto] por un subtotal de $[resultado]"
