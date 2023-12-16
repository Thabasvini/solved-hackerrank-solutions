function birthday(s, d, m) {
    // Write your code here
    let count=0;
    for(var i=0;i<s.length;i++){
    let newArr=s.slice(i,i+m);
    let sum=newArr.reduce((x,y)=>{return x+y})
    if(sum===d){
    count++
    }
    }
    return count;
    }