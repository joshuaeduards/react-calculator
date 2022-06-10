import React, { useContext, useEffect } from 'react';
import styles from '../assets/style/style.module.css';
import { Key, Screen } from '../ui/Parts';
import { StoreContext } from '../store/Store';

const digit = [7,8,9,4,5,6,1,2,3,0];

const operator = {
                "multiplication": ["*", "×", "&times;"],
                "division": ["/", "÷", "&divide;"],
                "addition": "+",
                "subraction": "-",
                "equals": "=",
            };

const others = {
                "del": ["ac", "AC"]
            }   

export const Calculator = () => {
    const stores = useContext(StoreContext);
    // first render runs. runs if the dependency value is changed
    // param: function, dependency
    // useEffect(()=>{
    // },[])
    const getItem = event => {
        event.preventDefault();
        const value = event.target.value;
        // const display_value = event.target.innerText; //or innerHTML

        if (value === others.del[1]){
            stores.handleValue("", "clear");
        }
        else if (value === operator.equals){
            stores.handleValue(value, "equals");
        }else{
            stores.handleValue(value, "inputvalues");
        }
    };

    let key = 0;
    const key_digit = digit.map((item) =>{ 
        return <Key key={key++} type="button" value={item} display={item} onclick={getItem}/>
    });

    return (
        <div className={styles.calculator_container}>
            <Screen type="text" value={stores.screendisplay}/>  
            <div className={styles.calculator_keys}>
                {key_digit}
                <Key type="button" value="." display="." onclick={getItem}/>
                <Key type="button" class={styles.ac} value={others.del[1]} display={others.del[1]} onclick={getItem}/>
                <Key type="button" class={styles.multiplication} value={operator.multiplication[1]} display={operator.multiplication[1]} onclick={getItem}/>
                <Key type="button" class={styles.division} value={operator.division[1]} display={operator.division[1]} onclick={getItem}/>
                <Key type="button" class={styles.addition} value={operator.addition} display={operator.addition} onclick={getItem}/>
                <Key type="button" class={styles.subtraction} value={operator.subraction} display={operator.subraction} onclick={getItem}/>
                <Key type="button" class={styles.equal_sign} value={operator.equals} display={operator.equals} onclick={getItem}/>
            </div>
        </div>
    );

}

