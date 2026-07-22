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

##############################################################
Nivel 3: Gestión Dinámica (Eliminar productos y arreglos de objetos)
En las aplicaciones reales, los usuarios se equivocan: agregan un producto por error o cambian de opinión. En esta fase vamos a llevar tu código a un nivel profesional utilizando un arreglo de objetos (Array) para gestionar los datos y permitiendo eliminar productos individuales de la lista actualizando el total automáticamente.

El Problema (Fase 3):
Ya no vamos a pegar texto directo en la lista HTML. Ahora guardaremos cada producto como un objeto dentro de una lista en JavaScript (productos = []), lo que nos permitirá volver a renderizar la lista y agregar un botón de "Eliminar" a cada elemento.

Requisitos:
Estructura de Datos (Arreglo):

Crea un arreglo global en tu JavaScript: let listaProductos = [].

Cada vez que se agregue un producto válido, crea un objeto con sus datos:
const nuevoProducto = { id: Date.now(), nombre: product, precio: price, cantidad: quatity, subtotal: subtotal }

Agrega ese objeto al arreglo (listaProductos.push(nuevoProducto)).

Renderizado Dinámico:

Crea una función renderizarLista() que limpie el <ul> y recorra el arreglo listaProductos para dibujar cada <li>.

Cada <li> debe incluir el texto del producto y un botón con la clase o evento para eliminar (ej: <button class="btn-eliminar">Eliminar</button>).

Eliminar y Recalcular:

Al hacer clic en el botón "Eliminar" de un producto:

Debes remover ese objeto específico del arreglo listaProductos.

Debes volver a calcular el Gran Total basado en los elementos que quedan.

Vuelve a llamar a renderizarLista() para actualizar la pantalla.