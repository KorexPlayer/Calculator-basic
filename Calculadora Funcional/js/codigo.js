let operandoa
let operandob
let operacion
let resultado =document.getElementById("numerador")
function init(){
   let sumar = document.getElementById("suma")
   let restar = document.getElementById("restar")
   let dividir = document.getElementById("dividir")
   let multiplicar = document.getElementById("multiplicar")
   let igual = document.getElementById("igual")
   let clear = document.getElementById("Clear")
   let numero1 = document.getElementById("num1")
   let numero2 = document.getElementById("num2")
   let numero3 = document.getElementById("num3")
   let numero4 = document.getElementById("num4")
   let numero5 = document.getElementById("num5")
   let numero6 = document.getElementById("num6")
   let numero7 = document.getElementById("num7")
   let numero8 = document.getElementById("num8")
   let numero9 = document.getElementById("num9")
   let numero0 = document.getElementById("num0")
   //Eventos
   numero1.onclick = function(e){
    resultado.textContent = resultado.textContent + "1"
   }
   numero2.onclick = function(e){
    resultado.textContent = resultado.textContent + "2"
   }
   numero3.onclick = function(e){
    resultado.textContent = resultado.textContent + "3"
   }
   numero4.onclick = function(e){
    resultado.textContent = resultado.textContent + "4"
   }
   numero5.onclick = function(e){
    resultado.textContent = resultado.textContent + "5"
   }
   numero6.onclick = function(e){
    resultado.textContent = resultado.textContent + "6"
   }
   numero7.onclick = function(e){
    resultado.textContent = resultado.textContent + "7"
   }
   numero8.onclick = function(e){
    resultado.textContent = resultado.textContent + "8"
   }
   numero9.onclick = function(e){
    resultado.textContent = resultado.textContent + "9"
   }
   numero0.onclick = function(e){
    resultado.textContent = resultado.textContent + "0"
   }
   clear.onclick = function(e){
    Resetear()
   }
   sumar.onclick = function(e) {
    operandoa = resultado.textContent
    operacion = "+"
    limpiar()
   }
   restar.onclick = function(e) {
    operandoa = resultado.textContent
    operacion = "-"
    limpiar()
   }
   dividir.onclick = function(e) {
    operandoa = resultado.textContent
    operacion = "/"
    limpiar()
   }
   multiplicar.onclick = function(e) {
    operandoa = resultado.textContent
    operacion = "*"
    limpiar()
   }
   igual.onclick = function(e) {
    operandob = resultado.textContent
    resolver()
   }
}
function limpiar() {
    resultado.textContent = ""
}
function Resetear() {
    resultado.textContent = ""
    operandoa = 0
    operandob = 0
    operacion = ""
}
function resolver() {
    res = 0
    if (operacion == "+"){
        res = parseFloat(operandoa) + parseFloat(operandob)
    } else if (operacion == "-") {
        res = parseFloat(operandoa) - parseFloat(operandob)
    } else if (operacion == "*") {
        res = parseFloat(operandoa) * parseFloat(operandob)
    }else {
        res = parseFloat(operandoa) / parseFloat(operandob)
    }
    Resetear()
    resultado.textContent = res
}
