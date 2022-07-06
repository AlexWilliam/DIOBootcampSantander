let button = document.getElementById("button1") as HTMLButtonElement;
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

let devePrintar = true;
let frase = "O valor é: ";

function adicionarNumeros(numero1: number, numero2: number, devePrintar: boolean, frase: string){
    let resultado = numero1 + numero2;
    if(devePrintar){
        console.log(frase + resultado);
    }
    return resultado;
}


button.addEventListener('click',  () => {
    console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
});