"use strict";
var button = document.getElementById("button1");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var devePrintar = true;
var frase = "O valor é: ";
function adicionarNumeros(numero1, numero2, devePrintar, frase) {
    var resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return resultado;
}
button.addEventListener('click', function () {
    console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
});
//# sourceMappingURL=ex1-ts.js.map