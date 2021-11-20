function check(b1){
    if(b1==true){
        console.log("True")
    }
    else{
        let count = 1;
        for(count=1;count <5;count++){
            if(count%2==0){
                console.log("Welcome " +count);
            }
            else{
                console.log("Goodbye "+count);
            }
        }
    }
}

check(false);


function check2(number){
    let rem = number%2;
    switch(rem){
        case 0:
            console.log("Even number");
            break;
        case 1:
            console.log("Odd Number");
            break;
    }
}

check2(510);