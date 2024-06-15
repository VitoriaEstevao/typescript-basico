type heroi ={
    name: string;
    vulgo: string;
};

function printObejto(pessoa: heroi){
    //console.log(pessoa);
};

printObejto({
    name : "Lucia",
    vulgo : "Fary tail"
});
// console.log("Helloooo");

//objeto sem previsibilidade
let produto:object={
    nome:"Melancia",
    valor: 30,
    vendedor:"Paula",
};

type ProdutoLoja = {
    nome: string,
    preco: number,
    unidades: number,
};

let meuProduto : ProdutoLoja ={
    nome: "liquidificador",
    preco: 18,
    unidades: 7,
};

let dados: string[] = ["Ana", "Elisa"]; // array
// array com dois tipos
let infos: (string | number)[] =["Luisa", 58];

// tuplas
let boleto:[string, number, number] = ["agua", 52.84, 23];

// arrays metodos / tem funcoes prontas

//datas
let niver: Date = new Date("2024-02-14 07:00");
//console.log(niver.toString());

// recebe uma string e retorna uma string
function addHello(name: string): string{
    return`Hello ${name}`;
}

// funcao assincrona / trabalha em segundo plano
// async ... Promise<>

//console.log(addHello("Bianca"));

function CallToPhone(phone:  number | string){
    return `Telfone: ${phone}`;
}
//console.log(CallToPhone(123456-59));

// interfaces = classe/ contrato X type

interface robot {
    readonly id: number | string, // não pode associar/ add um valor pq e somente leitura
    name: string,
    addHello(): String;
};

class pessoa implements robot{
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }
    addHello(): string {
        return "Hello";
    }
}

const p = new pessoa(55,"Lucy");
//console.log(p.addHello());

//----------------CLASSES
/* DATA MODIFIERS -> atributos ou metodos
    private -> na hr de add consegue salvar dados, mas dps nn consegue acessar | acesso somente na classe
    public
    protected -> tipo um privado, mas q outras classe herdam tbm
 */
class Character{
    name?: string; // n=faz com q nn fique obrigatorio esseatributo no contructor ou na hr de criar
    protected stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack(): void{
        console.log(`Attack with ${this.stregth} points`);

    }

}

class Mago extends Character{
    magia: number;

    constructor(
        name: string,
         stregth: number,
          skill: number,
          magia: number){
        // super e para fazer o construtor com os atributos da classe pai
        super(name,stregth,skill)
        this.magia = magia; 
    }
}
// GENERICS
//... aceita varios "itens"/argumentos
/*
    Nessa função pode dar o erro de misturar num e
    string ja q o return dela eh ANY
*/
function concatArray(...itens:any[]):any[]{
    return new Array().concat(...itens);
};
const numArray = concatArray([1,2],[6]);

// fazendo <T> podemos passar o tipo de string na hr de chamar
function concatArray2<T>(...itens:any[]):any[]{
    return new Array().concat(...itens);
};
//tipamos o numArray2 como apenas array de number
const numArray2 = concatArray2<number[]>([1,2],[6]);
// DECORATORS
function ExibirNome(target: any){
    console.log(target);
};

@ExibirNome
class Funcionario{};
// func q retorna outra func