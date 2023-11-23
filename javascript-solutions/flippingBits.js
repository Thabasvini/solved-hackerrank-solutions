function flippingBits(n) {
    // Write your code here
    let res="";
    let bit=(n>>>0).toString(2).padStart(32,"0");
    for(var i=0;i<bit.length;i++){
    if(bit[i]==="0"){
    res=res+"1"
    }
    else{
    res=res+"0"
    }
    }
    let result=parseInt(res,2)
    return result
    
    }