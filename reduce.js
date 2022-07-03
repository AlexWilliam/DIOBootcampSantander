const NUMEROS = [1, 2, 3, 4, 5];

function somaItens(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    });
}

console.log(somaItens(NUMEROS));

//////////////////////////////////////////////////////////////

const PRECOS = [
    {
        name: "Sabão",
        value: 30
    },
    {
        name: "Cereal",
        value: 12
    },
    {
        name: "Toalha",
        value: 30
    }
]

const SALDO_DISPONIVEL = 100;

function calculaSaldo(saldoDisponivel, precos){
    return precos.reduce(function(prev, current){
        return prev - current.value;
    }, saldoDisponivel);
}

console.log(calculaSaldo(SALDO_DISPONIVEL, PRECOS));