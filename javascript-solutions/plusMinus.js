function plusMinus(arr) {
    // Write your code here
    let total=arr.length;
    let countPositive=0;
    let countZero=0;
    let countNegative=0;
    let totalPos=0;
    let totalZero=0;
    let totalNeg=0;
    for(var i=0;i<arr.length;i++){
    if(arr[i]>=1){
    countPositive++;
    totalPos=(countPositive/total).toFixed(6);
    }
    else if(arr[i]==0){
    countZero++;
    totalZero=(countZero/total).toFixed(6);
    }
    else if(arr[i]<0){
    countNegative++;
    totalNeg=(countNegative/total).toFixed(6);
    }
    }
    console.log(totalPos)
    console.log(totalNeg)
    console.log(totalZero)
    
    }