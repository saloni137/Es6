var i = 0;
for(i=0;i<10;i++){
    if(i*i<10){
        console.log("*");
    }
    else{
        continue;
    }
    console.log("\n");
}

var obj={"a":1,"b":2,"c":3};
for(var i in obj){
    console.log(obj[i]);
}