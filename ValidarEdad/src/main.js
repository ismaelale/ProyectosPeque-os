import './style.css'
import { validaredad } from './counter.js'

document.querySelector('#app').innerHTML =/*html*/ `

  <div class="container">
    <h1>Control de Acceso</h1>
    <label for="edad">Ingresa tu edad:</label>
    <input type="number" id="edad">
    <button id="verificar">Verificar</button><br><br>

    <label>Resultado: <span id="mensaje"></span></label>
  </div>
`

document.getElementById("verificar").addEventListener("click", function(){
  let edad = Number(document.getElementById("edad").value)

  let mensaje = validaredad(edad)

  document.getElementById("mensaje").textContent = mensaje

});
