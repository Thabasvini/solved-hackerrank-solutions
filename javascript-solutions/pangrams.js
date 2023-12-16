
function pangrams(s) {
    // Write your code here
    let lowerCase=s.toLowerCase();
    let regex=lowerCase.match(/[a-z]/g);
    let newRegex=[...new Set(regex)];
    if(newRegex.length==26){
    return "pangram"
    }
    else{
    return "not pangram"
    }
    
    }