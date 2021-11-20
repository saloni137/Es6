function add_async(n1,n2){
    let p = new Promise(function(resolve,reject){
        if(n1>=0 && n2>=0){
            resolve(n1+n2);
        }
        else{
            reject('Numbers must be posivite');
        }
    })
    return p;
    
}

add_async(10,20)
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    });

add_async(20,30)
    .then((result)=>{
        console.log("1st",result);
        return add_async(result,result);
    })
    .then((result)=>{
        console.log("2nd",result);
        return add_async(result,result);
    })
    .then((result)=>{
        console.log("3rd",result);
        return add_async(result,result);
    })
    .catch((err)=>{
        console.log(err);
    })

Promise.all([add_async(10,20),add_async(20,30)])
    .then((resolve)=>{
        console.log(resolve[0]);
        console.log(resolve[1]);
    })
    .catch((err)=>{
        console.log(err);
    })

