//os resultados dessa função só vao passar se elas
//passarem pelo filtro da função de baixo (callback)
function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    //return item %2 !== 0; // caso forem os números ímpares coloca o não lógico
   return item %2 == 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log('Números pares: ', filtraPares(meuArray));