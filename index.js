// code your solution here
function saturdayFun(str = 'roller-skate'){

    return `This Saturday, I want to ${str}!`;
    
}

function mondayWork(activ = "go to the office"){

    return `This Monday, I will ${activ}.`;

}

function wrapAdjective(str = '*'){

    return function(unk = 'special'){
        return `You are ${str}${unk}${str}!`;
    }
}