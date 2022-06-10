import React from 'react';
import styles from '../assets/style/style.module.css';

export const Key = (props) => {
    return (
        <React.Fragment>
            <button type={props.type} className={props.class} onClick={props.onclick} value={props.value}>{props.display}</button>
        </React.Fragment>
    );
}

export const Screen = (props) => {
    return (
        <React.Fragment>
            <input className={styles.calculator_screen} type={props.type} value={props.value} disabled></input>
        </React.Fragment>
    );
}