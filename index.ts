interface IPessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'> {

}

const BRASILIEIRO: IBrasileiro = {
    nome: 'Alex',
    idade: 31
}

/*import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log("Chamou nova função");
    }
});

$('body').novaFuncao();*/

/*interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type TCachorroSomenteLeitura = {
    +readonly [K in keyof ICachorro]-?: ICachorro[K]
}

class MeuCachorro implements TCachorroSomenteLeitura {

    nome;
    idade;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const MEU_CACHORRO = new MeuCachorro('Luna', 8);*/

/*const MEU_CACHORRO: ICachorro = {
    nome: 'Luna',
    idade: 8
}*/



/*interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}


function redireciona(usuario: IUsuario) {
    if(usuario.cargo){
        // redireciona para area de funcionario interno
    }
    
    // redireciona para area de funcionario externo
}*/

/*
// Generic Types

function adicionaApendiceALista<T>(array: T[], value: T) {
    return array.map(() => value);
}

adicionaApendiceALista(['1', '2', '3'], '1');*/



/*const INPUT = document.getElementById('txtNome') as HTMLInputElement;

INPUT.addEventListener('input', (event)=> {
    const I = event.currentTarget as HTMLInputElement;
    console.log(I.value);
    //console.log(event.currentTarget.)
});*/



/*function soma(a:number, b:number) {
    return a + b;
}

// types

type TAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}

// interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
    domestico: boolean;
}

interface IFelinos extends IAnimal {
    visaoNoturna: boolean;
}

interface ICaninos extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande'
}

type TDomestico = IFelinos | ICaninos;

const ANIMAL: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}`),
    domestico: false
}

const LEAO: IFelinos = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}`),
    domestico: false
}

const CACHORRO: TDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}`),
}*/