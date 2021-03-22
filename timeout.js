//...........................................setTimeout().............................................
function doSomething(){
    console.log(3333);
}
console.log(2222);
doSomething();
console.log(4444);

console.log("\n");

console.log(2222);
setTimeout(doSomething, 2000);  //সব কাজ শেষ হওয়ার পর এটা এক্সিকিউট হবে।।
console.log(4444);
console.log(4444);

console.log("\n");

console.log(2222);
setTimeout(() => {
    console.log('See you later');
}, 3000);
console.log(4444);
console.log(4444);

console.log('\n');

// ..................................................setInterval()..................................................
console.log(2000);
setInterval(() => {
    console.log("doing it again and again!!");
}, 2000);
console.log(3000);
console.log(4000);


