const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function callback(item){
    return item%2===0;
}

function filtraPares(arr){
    return arr.filter(callback);
}

console.log(filtraPares(NUMEROS));