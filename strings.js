var s = new String("Hello");

var h = "Hello ES6";
console.log(`${h}, Saloni`);

var multiline = `this
is
a multiline`;
console.log(multiline);

var s1 = String.raw`Hello \n Saloni`;
console.log(s1);


function func(literals,...vs){
    console.log(literals);
    console.log(vs);
}

let v1 = "hello";
let v2 = "saloni";
var r = func `sum of ${v1},${v2} is `;