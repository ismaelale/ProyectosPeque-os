import './style.css'
import { calcular } from './counter.js'

document.querySelector('#app').innerHTML = /*html*/ `

  <div class="container">
    <h1>INNOVA</h1>
    <div class="container-container">
      <label for="name_products">Productos</label>
      <input type="text" id="name_products">
      
      <label for="price_unitary">Precio Unitario</label>
      <input type="text" id="price_unitary">

      <label for="quatity">Cantidad</label>
      <input type="text" id="quatity">

      <label for="subtotal">SubTotal</label>
      <label><span id="subtotal"></span></label>

      <button id="addproduct">Agregar Productos</button>
      <button id="viewproduc">Ver Productos</button>
      <h2>Resumen</h2>
      <ul id="product">

      </ul>

      <h3>Gran Total: <span id="total">L. 0</span></h3>
    </div>
  </div>



`

let agregar = document.getElementById("product")
let total = 0
let listaproductos = []
document.getElementById("addproduct").addEventListener("click", function(){

  let product = document.getElementById("name_products").value
  let price = Number(document.getElementById("price_unitary").value)
  let quatity = Number(document.getElementById("quatity").value)

  //const elemento = document.createElement('li')
  let subtotal = calcular(price, quatity, product)
  document.getElementById("subtotal").textContent = subtotal
  if(subtotal !== null){
    //elemento.textContent = `Producto: ${product} - Precio: L. ${price} - Cantidad: ${quatity} - SubTotal: L. ${subtotal}`
    //agregar.appendChild(elemento)
    total += subtotal
    const nuevoproducto = {id: Date.now(), nombre: product, precio: price, cantidad: quatity, subtotal: subtotal}
    listaproductos.push(nuevoproducto)
    console.log("Arreglo agregado")
    
  }
});

document.getElementById("viewproduc").addEventListener("click", function(){
  //let view = document.getElementById("product")
  const elementos = document.createElement('li')

  listaproductos.forEach((numero, index ) => {
    elementos.textContent = `Id: ${index} - Producto: ${numero.nombre} - Precio: ${numero.precio} - Cantidad: ${numero.cantidad} - SubTotal: ${numero.subtotal}`
  })
  
  agregar.appendChild(elementos)
})