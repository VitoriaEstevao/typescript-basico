"use strict";
function printObejto(pessoa) {
    //console.log(pessoa);
}
;
printObejto({
    name: "Lucia",
    vulgo: "Fary tail"
});
// console.log("Helloooo");
//objeto sem previsibilidade
let produto = {
    nome: "Melancia",
    valor: 30,
    vendedor: "Paula",
};
let meuProduto = {
    nome: "liquidificador",
    preco: 18,
    unidades: 7,
};
let dados = ["Ana", "Elisa"]; // array
// array com dois tipos
let infos = ["Luisa", 58];
// tuplas
let boleto = ["agua", 52.84, 23];
// arrays metodos / tem funcoes prontas
//datas
let niver = new Date("2024-02-14 07:00");
//console.log(niver.toString());
// recebe uma string e retorna uma string
function addHello(name) {
    return `Hello ${name}`;
}
// funcao assincrona / trabalha em segundo plano
// async ... Promise<>
//console.log(addHello("Bianca"));
function CallToPhone(phone) {
    return `Telfone: ${phone}`;
}
;
class pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addHello() {
        return "Hello";
    }
}
const p = new pessoa(55, "Lucy");
//console.log(p.addHello());
//----------------CLASSES
/* DATA MODIFIERS -> atributos ou metodos
    private -> na hr de add consegue salvar dados, mas dps nn consegue acessar | acesso somente na classe
    public
    protected -> tipo um privado, mas q outras classe herdam tbm
 */
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
class Mago extends Character {
    constructor(name, stregth, skill, magia) {
        // super e para fazer o construtor com os atributos da classe pai
        super(name, stregth, skill);
        this.magia = magia;
    }
}
