
const maca = {
    value: 2,
};
const laranja = {
    value:3,
};

//se eu passar a maçã ele vai ler a maçã que é = 2 e vai multiplicar pelo valor do array
//da mesma forma se eu passar alaranja ele vai ler valor = 3 e vao multiplicar pelo valor do array
//sempre no lugar do thisArg
function mapComThis(arr, thisArg) {
return arr.map(function (item) {
   return item * this.value;
}, thisArg);
}

const nums = [1, 2];

console.log('this -> é maçã', mapComThis(nums, maca));
console.log('this -> é laranja', mapComThis(nums, laranja));