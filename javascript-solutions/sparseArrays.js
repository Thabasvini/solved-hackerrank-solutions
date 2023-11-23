function matchingStrings(strings, queries) {
    // Write your code here
    let newArr=[];
    let count=0;
    for(let i=0;i<queries.length;i++){
    count=0
    for(let j=0;j<strings.length;j++){
    if(queries[i]===strings[j]){
    count++
    }
    }
    newArr.push(count);
    
    }
    return newArr;
    }