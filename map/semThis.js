function mapSemThis(arr){
return arr.map(function(item){
    return item * 2;
});
}

const nums = [2, 4, 6, 8, 10];
console.log(mapSemThis('Array multiplicado: ', nums));//listar array multiplicado

console.log('Array original: ', nums);//listar o array original sem alterações