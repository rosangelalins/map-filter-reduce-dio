function somaNumeros(arr){
    //como não foi passado valor inicial
    //ele vai pegar o primeiro numero do array que é o 1
    return arr.reduce(function(prev, current){
        //vai somar 1+2
        console.log({prev});//ver o valor de prev
        console.log({current});//ver o valor de current
        return prev + current;
    //}, 0) caso fosse passar um valor inicial ficaria assim
    },)
}

const arr =[1,2];

console.log('Soma: ', somaNumeros(arr));
