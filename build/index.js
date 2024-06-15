"use strict";
//... aceita varios "itens"/argumentos
function concatArray(...itens) {
    return new Array().concat(...itens);
}
;
const numArray = concatArray([1, 2], [6]);
console.log(numArray);
