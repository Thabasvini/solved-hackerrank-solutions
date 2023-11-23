function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let arrRes=[]
    let newArr=ar.sort((x,y)=>x-y);
    for(var i=0;i<newArr.length;i++){
    for(var j=i+1;j<newArr.length;j++){
    let total=newArr[i]+newArr[j];
    if(i<j && total%k==0){
    arrRes.push(total)
    }
    }
    }
    return arrRes.length;
}