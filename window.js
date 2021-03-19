var name = 'Malik ibn dinar'
function add (num1, num2) {
    result = num1 + num2;
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
var sum = add(13, 21);
console.log(sum);
console.log(result);