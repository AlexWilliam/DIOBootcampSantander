let anyEstaDeVolta: any;
anyEstaDeVolta = true;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 222;

let stringTeste: string = "Teste";
stringTeste = anyEstaDeVolta;


let unknownValue: unknown;
unknownValue = true;
unknownValue = 'teste';
unknownValue = 222;

let stringTeste2: string = "Teste";
// stringTeste2 = unknownValue; // Este não funciona

if(typeof unknownValue === 'string'){
    stringTeste2 = unknownValue; // Desta forma funciona
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo};
}

jogaErro("Deu Erro", 500);