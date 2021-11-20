var customer = {
    name:"saloni",
    age:function(n){
        return 2020-n;
    },
    hobbies:["coding","reading"]
}
console.log(customer.name);
console.log(customer.age(1998));

var student = new Object();
student.name = "Saloni";
student["age"]= 22;
console.log(student);

let {name,age} = student;
console.log(name);
console.log(age);

let fname="saloni";
let lname="saraiya";
let me = {
    fname,
    lname,
    getFullname(){
        return fname + " " + lname;
    }
}

console.log(me.getFullname());

class Customer{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getFullName(){
        return this.name + " " + this.age;
    }
}

let c1 = new Customer("Saloni",22);
console.log(c1.getFullName());


