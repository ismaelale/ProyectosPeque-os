import javascriptLogo from './assets/javascript.svg'
import './style.css'
import { suma, restar, division, multi } from './counter.js'

document.querySelector('#app').innerHTML =/*html*/ `

  <main class="container">
   <div>
     <h1>Calculadora</h1>
   </div>
    <section class="inputs">  
      <label for="numero1">Numero 1</label>
      <input type="number" id="numero1" class="bg-white text-black">
      <label for="numero2">Numero 2</label>
      <input type="number" id="numero2" class="bg-white text-black">
      <div class="botones">
        <button id="sumar">Sumar</button><br><br>
        <button id="restar">Restar</button><br><br>
        <button id="division">Divison</button><br><br>
        <button id="multi">Multiplicación</button><br><br>
      </div>

    </section>
    <label>Resultado: <span id="resultado"></span></label>
  </main>
`

document.getElementById("sumar").addEventListener("click", function(){
  const numero1 = Number(document.getElementById("numero1").value)
  const numero2 = Number(document.getElementById("numero2").value)
  
  const result = suma(numero1, numero2)

  document.getElementById("resultado").textContent = result

})

document.getElementById("restar").addEventListener("click", function(){
  const numero1 = Number(document.getElementById("numero1").value)
  const numero2 = Number(document.getElementById("numero2").value)
  
  const result = restar(numero1, numero2)

  document.getElementById("resultado").textContent = result

})
document.getElementById("division").addEventListener("click", function(){
  const numero1 = Number(document.getElementById("numero1").value)
  const numero2 = Number(document.getElementById("numero2").value)
  
  const result = division(numero1, numero2)

  document.getElementById("resultado").textContent = result

})
document.getElementById("multi").addEventListener("click", function(){
  const numero1 = Number(document.getElementById("numero1").value)
  const numero2 = Number(document.getElementById("numero2").value)
  
  const result = multi(numero1, numero2)

  document.getElementById("resultado").textContent = result

})

