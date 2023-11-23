
function gradingStudents(grades) {
    // Write your code here
    let res=[]
    for(let i=0;i<grades.length;i++){
    let remainder=grades[i]%5;
    let roundValue=5-remainder;
    let difference=(grades[i]+(roundValue));
    if(grades[i]>=40 && roundValue<3){
    res.push(difference)
    }
    else if(grades[i]<40 && roundValue<3 && difference>=40){
    res.push(difference);
    }
    else if(grades[i]>=40 && roundValue>=3){
    res.push(grades[i]);
    }
    else{
    res.push(grades[i])
    }
    }
    return res;
    }