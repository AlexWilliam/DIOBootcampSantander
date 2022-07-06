const PESSOA = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
}

PESSOA.idade = 29;

const ANDRE: {nome: string, idade: number, profissao: string} = {
    nome: "André",
    idade: 25,
    profissao: "pintor"
}

const PAULA: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
}

enum EProfissiao {
    Professora,
    Atriz,
    Desenvolvedora,
    Pintor,
    JogadorDeFutebol
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao?: EProfissiao
}

interface IEstudade extends IPessoa {
    materia: string[]
}

const VANESSA: IPessoa = {
    nome: "Vanessa",
    idade: 23,
    profissao: EProfissiao.Desenvolvedora
}
const MARIA: IPessoa = {
    nome: "Maria",
    idade: 23,
    profissao: EProfissiao.Desenvolvedora
}

const JESSICA: IEstudade = {
    nome: "Jessica",
    idade: 21,
    profissao: EProfissiao.Desenvolvedora,
    materia: ['Matemática Discreta', 'Programação']
}

const MONICA: IEstudade = {
    nome: "Mônica",
    idade: 21,
    materia: ['Matemática Discreta', 'Programação']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(MONICA.materia);