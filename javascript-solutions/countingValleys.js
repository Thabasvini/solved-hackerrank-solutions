
function countingValleys(steps, path) {
    // Write your code here
    let seaLevel=0;
    let count=0;
    for(var i=0;i<path.length;i++){
    if(path[i]==="D"){
    seaLevel--;
    }
    else if(path[i]==="U"){
    seaLevel++;
    
    }
    if(seaLevel===0 && path[i]==="U"){
    count++
    }
    }
    return count;
    
    }