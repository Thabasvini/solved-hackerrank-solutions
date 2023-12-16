function marsExploration(s) {
    // Write your code here
    let count=0;
    let length=s.length/3;
    let expectedSignal="SOS".repeat(length).split("");
    let splitS=s.split("");
    for(var i=0;i<splitS.length;i++){
    if(expectedSignal[i]!=splitS[i]){
    count++;
    }
    }
    return count
    }