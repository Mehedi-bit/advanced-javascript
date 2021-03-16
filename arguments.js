function add(num1, num2){
    console.log(arguments);   //arguments is an array-like object
    console.log([...arguments]);   //now its just simply an array


    const arrayOfArguments = [...arguments];
    let total = 0
    for (let i = 0; i < arrayOfArguments.length; i++) {
        const element = arrayOfArguments[i];
        total += element;
        
    }
    return total;
}
const result = add(2, 3, 5, 7, 3, 20);
console.log(result);