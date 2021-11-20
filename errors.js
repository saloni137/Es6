var a = 5;
var b = 10;

function Myerror(message){
    this.message = message || 'Default message';

}
try{
    if(a>10 && b>10){
        console.log(a+b);
    }
    else{
        throw new Myerror('numbers not allowed');
    }
}
catch(e){
    console.log(e);
}

a = 10
b = 0
try{
    if(b==0){
        throw ('Divide by Zero Exception');
    }
    else{
        console.log(a/b);
    }
}
catch(e){
    console.log(e);
}