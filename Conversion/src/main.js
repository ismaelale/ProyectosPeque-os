import './style.css'
import { conversion } from './counter.js'

document.querySelector('#app').innerHTML = /*html*/`

  <div class="container">
    <h1>Conversor de Temperatura</h1>
    <label for="celsius">Grados Celsius (°C):</label>
    <input type="number" id="cantidad">
    <select name="conver" id="conv">
      <option value="sel">Seleccione una opcion...</option>
      <option value="far">Farengeit a Celsius</option>
      <option value="cel">Celcius a Farengei</option>
    </select>
    <button id="convertir">Convertir</button><br><br>

    <label>Resultado: <span id="resultado"></span></label>
  </div>

`

document.getElementById("convertir").addEventListener("click", function(){
  var eleccion = document.getElementById("conv") 
  var eleccion2 = eleccion.selectedIndex
  var cantidad = Number(document.getElementById("cantidad").value)

  var  resulta = conversion(eleccion2, cantidad)

  document.getElementById("resultado").textContent = resulta

})

