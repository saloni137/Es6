var p1 = new Function("x","y","return x*y");

var result = p1(10,20);
console.log(result);

function factorial(num){
    if(num==1){
        return num;
    }
    else{
        return (num*factorial(num-1));
    }
}

console.log(factorial(4));

(function(){
    console.log("Hello ES6")
})();


var result = (x)=>(x*x);

console.log(result(10));

var msg = ()=>{
    console.log("Message received");
}

msg();


var main = function(){
    var loop = function(){
        for(x=0;x<5;x++){
            console.log(x);
        }
    }();
}

main();

function* askaway(){
    const name = yield "What is your favorite food?";
    const language = yield "what language do you know?";
    return `favorite food ${name} and I know ${language}`;
}
var go = askaway();
console.log(go.next());
console.log(go.next("pizza"));
console.log(go.next("English"));


"use strict"
function* fruits(){
    yield "Mango";
    yield "Apple";
    yield "Banana";
}

for(let i of fruits()){
    console.log(i);
}


setTimeout(function(){
    console.log("Functions Leanred");
},5000);

let array =["Ross","Rachel","Monica"];
array.map((element,index)=>{
    console.log(index,element);
})


