function tryCatchTeste(objeto, tamanho){
    try{
        if(!objeto || !tamanho) throw ReferenceError("Envie os paramêtros!");

        if(typeof objeto !== 'object') throw TypeError(`Paramêtros precisa ser do tipo 'array'!`);

        if(typeof tamanho !== 'number') throw TypeError(`Paramêtros precisa ser do tipo 'number'!`);

        if(objeto.length !== tamanho) throw RangeError(`Parâmetro do tipo 'array' não tem tamanho ${tamanho}`);

        console.log("Funcão sem erros!");

    }catch(e){
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
            throw e;
        } else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(e.message);
            throw e;
        } else if(e instanceof RangeError){
            console.log("Este é um RangeError!");
            console.log(e.message);
            throw e;
        } else {
            console.log("Erro de tipo não esperado: "+e.message);
            throw e;
        }
    }
}

const ARRAY = [1, 2, 3, 4]

tryCatchTeste(ARRAY, null);
tryCatchTeste(null, 5);
tryCatchTeste("teste", 2);
tryCatchTeste(ARRAY, "5");
tryCatchTeste(ARRAY, 5);
tryCatchTeste(ARRAY, 4);