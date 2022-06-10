import React, { useState, useEffect } from 'react';
import { sanitize, appendval } from '../utilities/utils.js';
import { compute } from '../utilities/compute.js';

export const StoreContext = React.createContext({
    screendisplay: "",
});

export default props => {
    const [screendisplay, setItem] = useState("");
    
    const handleValue = (itemCalcu, procedure) => {

        if(sanitize(screendisplay, itemCalcu) === true){
            switch(procedure){
                case "clear":
                    setItem(itemCalcu);
                    console.log("CLEAR!");
                    break;

                case "equals":
                    const ans = compute(screendisplay);
                    console.log(ans);
                    setItem(ans);
                    console.log("EQUALS!");
                    break;

                case "inputvalues":
                    const appended = appendval(screendisplay, itemCalcu);
                    setItem(appended);
                    console.log("APPENDED!");
                    break;
            }
        }else{
            let removed_last_index = screendisplay.slice(0, -1);
            setItem(removed_last_index);
            console.log("current value: "+ screendisplay);
        }
    }

    return (
        <StoreContext.Provider value={{ screendisplay: screendisplay, handleValue: handleValue}}>
            {props.children}
        </StoreContext.Provider>
    );
};