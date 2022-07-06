"use strict";
/*function somarValoresNumericos(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1, 2));

function printaValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1, numero2);
}*/
function somarValoresNumericosETratar(numero1, numero2, callback) {
    var resultado = numero1 + numero2;
    return callback(resultado);
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(1, 3, aoQuadrado);
console.log(1, 3, dividirPorEleMesmo);
//# sourceMappingURL=retorno_funcoes.js.map