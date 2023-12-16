function flippingMatrix(matrix) {
    // Write your code here
    let result=0;
    for(var i=0;i<matrix.length/2;i++){
    for(var j=0;j<matrix.length/2;j++){
    let topLeft=matrix[i][j];
    let topRight=matrix[i][matrix.length-1-j];
    let bottomLeft=matrix[matrix.length-1-i][j]
    let bottomRight=matrix[matrix.length-1-i][matrix.length-1-j]
    result=result+Math.max(topLeft,topRight,bottomLeft,bottomRight)
    }
    }
    return result;
    }