import {
        hasoperators,
        removelastoperator,
        stringtoarithmetic 
    } from './utils.js';

export const compute = (str) => {
        let replaced_op = str.replaceAll("÷", '/').replaceAll("×", '*');
        try{
            if (hasoperators(replaced_op)){
                if(removelastoperator(replaced_op)){
                    let removed_last_index = replaced_op.slice(0, -1);
                    let str_values = removed_last_index.length === 1 ? "" : new String(removed_last_index).toString();
                    return String(str_values === "" ? "" : eval(stringtoarithmetic(str_values)));
                }
                let str_values = replaced_op.length === 1 ? "" : new String(replaced_op).toString();
                return String(str_values === "" ? "" : eval(stringtoarithmetic(str_values)));
            }
            // else if(replaced_op){
            //     //octal handle
            // }
            else{
                return String(str);
            }
        }catch(err){
            //octal handle
            return "";
        }
        
 };