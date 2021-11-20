let a = new Array(5);
for(let i=0;i<a.length;i++){
    a[i] = i*2;
    console.log(a[i]);
}

//fill and filter
var numbers = [1,2,3,4,5,6,7,8,9,10];
var evennumbers = numbers.filter((x)=>x%2==0);
console.log(evennumbers);

for(let i of Array.from('saloni')){
    console.log(i);
}


//Date functions
var d = new Date();
console.log(d.getDate());
console.log(d);