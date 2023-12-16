function miniMaxSum(arr) {
    // Write your code here
    let max=0;
    let min=0;
    let arrSort=arr.sort((a,b) => a-b);
    for(var i=1;i<arrSort.length;i++){
    max=arrSort[i]+max;
    }
    for(var i=0;i<arrSort.length-1;i++){
    min=arrSort[i]+min;
    //console.log(min)
    }
    console.log(min+" "+max)
    }
    