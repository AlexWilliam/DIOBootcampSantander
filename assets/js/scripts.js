var currentNumberWrapper = document.getElementById("currentNumber");

document.getElementById("adicionar").addEventListener("click", function(){

    let currentNumber = currentNumberWrapper.innerHTML;

    currentNumber++;

    mudarCorNumero(currentNumber);

    currentNumberWrapper.innerHTML = currentNumber;
});

document.getElementById("subtrair").addEventListener("click", function(){

    let currentNumber = currentNumberWrapper.innerHTML;

    currentNumber--;

    mudarCorNumero(currentNumber);

    currentNumberWrapper.innerHTML = currentNumber;
});

function mudarCorNumero(currentNumber){
    if(currentNumber < 0){
        currentNumberWrapper.style.color = "red";
    }else if(currentNumber > 0){
        currentNumberWrapper.style.color = "blue";
    }else{
        currentNumberWrapper.style.color = "black";
    }
}