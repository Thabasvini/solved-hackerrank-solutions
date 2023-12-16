function timeConversion(s) {
    // Write your code here
    let sliceHour=s.slice(0,2);
    let sliceMin=s.slice(3,5);
    let silceSec=s.slice(6,8);
    if(s.endsWith("PM") && sliceHour<=11){
    return `${+sliceHour+12}:${sliceMin}:${silceSec}`
    }
    else if(sliceHour==="12" && s.endsWith("AM")){
    return `00:${sliceMin}:${silceSec}`
    }
    else if(sliceHour==="12" && s.endsWith("PM")){
    return `12:${sliceMin}:${silceSec}`
    }
    else{
    return `${sliceHour}:${sliceMin}:${silceSec}`
    }
    
    }