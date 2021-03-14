// .........falsy.........
// 0
// ""
// undefined variable  (ex. let x;)
// null
// NaN

// ..........truthy..........
// 12
// -4
// "0"
// " "
// "anything"
// defined variable  (ex. let x = 5;)
// {}
// []
let num = 0;
if (num || num == 0) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}