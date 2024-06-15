
// function apiVersion(version: string){
//     return(target: any) => {
//         // assign -> associar ao obejto
//         // prototype -> pegar a estrutura
//         // __ -> propriedade privada
//         Object.assign(target.prototype, {__version: version})
//     }
// }

// add uma propriedade dinamicamente
//@apiVersion("1.10")

// ATTRIBUTE DECORATOR -- da para utilizar por ex para validacao de campos
function minLength(length: number){
    return(target: any, key: any) =>{
        let _value = target[key];

        const getter = () => "[teste]" + _value;
        const setter = (value: string) =>{
            if(value.length < length){
                throw new Error(`Tamanho menor que ${length}`);
            }else{
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    };
}

class Api{
    @minLength(3)
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

const api = new Api("prod");
console.log(api.name);