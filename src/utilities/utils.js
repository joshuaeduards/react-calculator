export const hasoperators = (str="") => {
    const operator = ["*", "/", "+", "-", "÷", "×"];
    for (var i = 0; i < str.length; i++) {
        if(operator.includes(str.charAt(i))){
            return true;
        }
    }
    return false;
}

export const sanitize = (currentValue, inputValue) => {
    const excluded = ["*", "/", "+", "-", ".", "÷", "×"];
    // identify current value's last index --vs-- newly input value
    if(((excluded.includes(currentValue.substr(-1))) && currentValue.substr(currentValue.length - 1) === inputValue) ||
    ((excluded.includes(currentValue.substr(-1))) && excluded.includes(inputValue))){
        console.log("invalid action"+inputValue);
        return false;
    }
    else{
        return true;
    }
}

export const removelastoperator = (str) => {
    // remowve last index if operator
    const operator = ["*", "/", "+", "-", "÷", "×"];
    if(operator.includes(str.substr(-1))){
        return true;
    }
    return false;
}

export const appendval = (strdisplay, strinput) => {
    if(strinput !== ""){
        return strdisplay.concat(strinput);
    }
}

export const stringtoarithmetic = (str) => {
    // const regex = new RegExp('\/|\+|-|\*|\÷|\×|AC');
    // const isMatch = new RegExp(regex, stores.screendisplay);
    return str
}

