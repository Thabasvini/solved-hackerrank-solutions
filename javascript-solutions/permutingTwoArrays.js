function twoArrays(k, A, B) {
    // Write your code here
    let sum=[];
    let aSort=A.sort((a,b)=> a-b);
    let bSort=B.sort((a,b)=> b-a);
    for(var i=0;i<aSort.length;i++){
    sum.push(aSort[i]+bSort[i]);
    for(var j=0;j<sum.length;j++){
    if(sum[j]<k){
    return "NO"
    }
    } 
    }
    return "YES"
    
    }