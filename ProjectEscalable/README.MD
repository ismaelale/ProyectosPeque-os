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


##############################################################
El Problema (Fase 2):
Cada vez que el usuario presione el botón "Calcular" (o "Agregar"), el producto no debe reemplazar al anterior. En su lugar:

Debe agregarse como un nuevo elemento dentro de una lista (<ul> u <ol>).

Debe actualizarse un Gran Total que sume los subtotales de todos los productos agregados hasta el momento.

Requisitos:
Reorganiza o actualiza tu HTML para incluir:

Una lista (<ul id="lista-productos"></ul>) para ir mostrando los ítems.

Un elemento para mostrar el total acumulado (<span id="gran-total">L. 0</span>).

En tu archivo de JavaScript:

Mantén una variable global para el total acumulado (ej: let granTotal = 0).

Cuando subtotal sea válido (no null):

Crea un nuevo elemento de lista (<li>) dinámicamente con JavaScript (usando document.createElement('li') o innerHTML +=).

El texto del <li> debe ser: "[producto] - Cantidad: [cantidad] | Subtotal: L. [subtotal]".

Agrégalo a la lista en pantalla.

Suma el subtotal actual al granTotal y actualiza la pantalla.