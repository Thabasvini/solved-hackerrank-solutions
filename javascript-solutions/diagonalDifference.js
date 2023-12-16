function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonal=[];
    let rightDiagonal=[];
    for(var i=0;i<arr.length;i++){
    leftDiagonal.push(arr[i][i])
    }
    for(var j=0;j<arr.length;j++){
    rightDiagonal.push(arr[j][arr.length-1-j])
    }
    let leftReduce=leftDiagonal.reduce((x,y)=> x+y)
    let rightReduce=rightDiagonal.reduce((a,b)=> a+b)
    let result=Math.abs(leftReduce-rightReduce)
    return result;
    
    }