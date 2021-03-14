const numbers = [3, 4, 5, 6, 7, 8];
const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     var result = element ** 2;
//     output.push(result);
// }

// function square(element){
//     return element*element;
// }

// const square = (element) => element * element;

// const result = numbers.map(function(element){
//     return element*element;
// })

const result = numbers.map(x => x*x)

console.log(result);