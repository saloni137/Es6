function add(a,b,c){
    return a+b+c;
}
let arr = [13,56,78];
console.log(add(...arr));

let a1 = [13,44,56];
let a2 = [45,67,12];

let a3 = [...a1,...a2];
console.log(a3);

let student1 = {
    name:"saloni",
    age:22
}

let student2 = {
    placement:"coruscate",
}

let student3 = {...student1,...student2};
console.log(student3);