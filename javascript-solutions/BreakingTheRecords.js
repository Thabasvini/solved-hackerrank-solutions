function breakingRecords(scores) {
    // Write your code here
    let scoreSet=new Set([...scores]);
    let newScore=Array.from(scoreSet);
    //let newScoreZero=newScore[0];
    let minScoreCurrent=newScore[0];
    let maxScoreCurrent=newScore[0];
    let minCount=0;
    let maxCount=0;
    for(var i=1;i<newScore.length;i++){
    if(maxScoreCurrent<newScore[i] && newScore[i]>maxScoreCurrent){
    maxScoreCurrent=newScore[i];
    maxCount++;
    }
    else if(minScoreCurrent>newScore[i] && newScore[i]<minScoreCurrent){
    minScoreCurrent=newScore[i];
    minCount++;
    }
    
    }
    let result=[];
    result.push(maxCount,minCount);
    return result;
    }