class Student{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }
    get fullname(){
        return `${this.fname} : ${this.lname}`;
    }
}

let name = ["Saloni","Saraiya"];
let s1 = Reflect.construct(Student,name);
console.log(s1.fullname);