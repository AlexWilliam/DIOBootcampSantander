"use strict";
var PESSOA = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
};
PESSOA.idade = 29;
var ANDRE = {
    nome: "André",
    idade: 25,
    profissao: "pintor"
};
var PAULA = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
};
var EProfissiao;
(function (EProfissiao) {
    EProfissiao[EProfissiao["Professora"] = 0] = "Professora";
    EProfissiao[EProfissiao["Atriz"] = 1] = "Atriz";
    EProfissiao[EProfissiao["Desenvolvedora"] = 2] = "Desenvolvedora";
    EProfissiao[EProfissiao["Pintor"] = 3] = "Pintor";
    EProfissiao[EProfissiao["JogadorDeFutebol"] = 4] = "JogadorDeFutebol";
})(EProfissiao || (EProfissiao = {}));
var VANESSA = {
    nome: "Vanessa",
    idade: 23,
    profissao: EProfissiao.Desenvolvedora
};
var MARIA = {
    nome: "Maria",
    idade: 23,
    profissao: EProfissiao.Desenvolvedora
};
var JESSICA = {
    nome: "Jessica",
    idade: 21,
    profissao: EProfissiao.Desenvolvedora,
    materia: ['Matemática Discreta', 'Programação']
};
var MONICA = {
    nome: "Mônica",
    idade: 21,
    materia: ['Matemática Discreta', 'Programação']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(MONICA.materia);
//# sourceMappingURL=objetos_lista_ts.js.map