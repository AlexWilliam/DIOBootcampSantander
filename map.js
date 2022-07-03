const MACA = {
    value: 2,
}

const LARANJA = {
    value: 3,
}

const NUMEROS = [1, 2, 3, 4]

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item*this.value;
    }, thisArg)
}


console.log(mapComThis(NUMEROS, MACA));
console.log(mapComThis(NUMEROS, LARANJA));

////////////////////////////////////////////////////////////

function mapSemThis(arr){
    return arr.map((item)=>item*2);
}

console.log(mapSemThis(NUMEROS));
console.log(mapSemThis(NUMEROS));