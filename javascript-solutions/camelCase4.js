function processData(input) {
    //Enter your code here
    let splitData=input.split("\r\n");
    for(var i=0;i<splitData.length;i++){
    if(splitData[i].charAt(0)==="S" && splitData[i].charAt(2)==="V"){
    let place=splitData[i].slice(4,splitData[i].length);
    let regex=place.replace(/[A-Z]/g,replace=> " "+ replace.toLowerCase());
    console.log(regex)
    }
    else if(splitData[i].charAt(0)==="C" && splitData[i].charAt(2)==="M"){
    let place=splitData[i].slice(4,splitData[i].length);
    let regex=place.replace(/(\s)[a-z]/g,replace=> replace.toUpperCase().trim());
    console.log(regex+"()")
    }
    else if(splitData[i].charAt(0)==="C" && splitData[i].charAt(2)==="C"){
    let place=splitData[i].slice(4,splitData[i].length);
    let regex=place.replace(/\b\w/g,replace=>replace.toUpperCase()).replace(/\s/g,"");
    console.log(regex)
    }
    else if(splitData[i].charAt(0)==="S" && splitData[i].charAt(2)==="C"){
    let place=splitData[i].slice(4,splitData[i].length);
    let regex=place.replace(/[A-Z]/g,replace=> " "+replace.toLowerCase());
    console.log(regex.trim())
    }
    else if(splitData[i].charAt(0)==="C" && splitData[i].charAt(2)==="V"){
    let place=splitData[i].slice(4,splitData[i].length);
    let regex=place.replace(/\s[a-z]/g,replace=>replace.toUpperCase().trim());
    console.log(regex)
    }
    else if(splitData[i].charAt(0)==="S" && splitData[i].charAt(2)==="M"){
    let place=splitData[i].slice(4,splitData[i].length);
    let regex=place.replace(/[A-Z]/g,replace=> " "+replace.toLowerCase()).replace(/\(\)$/g,"");
    console.log(regex)
    }
    }
    } 