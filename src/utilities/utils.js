export const checklastindex = (regex, fromIndex) => {
    return String.prototype.lastIndexOfRegex = function(regex, fromIndex){
        let str = fromIndex ? this.substring(0, fromIndex) : this;
        let match = str.match(regex);
        return match ? str.lastIndexOf(match[match.length-1]) : -1;
      }
}

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
    if(strinput != ""){
        return strdisplay.concat(strinput);
    }
}

export const stringtomath = () => {
    
}

