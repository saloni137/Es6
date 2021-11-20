class car{
    constructor(color,brand){
        this.color = color;
        this.brand = brand;
    }
    set carcolor(y){
        this.color = y;
    }
    get carcolor(){
        return this.color;
    }
}

let swift = new car("White","maruti");
console.log(swift);
swift.carcolor="red";
console.log(swift);
console.log(swift.carcolor);

var check = swift instanceof car;
console.log(check);

class shape{
    constructor(name){
        this.name = name;
    }
    set shapeName(sname){
        this.name = sname;
    }
    get shapeName(){
        return this.name;
    } 
}

class circle extends shape{
    constructor(name,radius){
        super(name);
        this.radius = radius;
    }
    set cicleRadius(r){
        this.radius = r;
    }
    get circleRadius(){
        return this.radius;
    }

    calculate_area(){
        return "Area of " + this.name + " is " + (3.14*this.radius*this.radius);
    }

}

let c1 = new circle("circle",10);
console.log(c1.calculate_area());




