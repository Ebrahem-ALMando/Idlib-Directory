import styles from './Input.module.css';
import { useRef, useState } from "react";

const Input = ({ type, name, placeholder,prop,IsSign ,IsSignLog,min}) => {

    const [inputFocus, setInputFocus] = useState(false);
    const [inputVal,setInputVal]=useState('')
    const handelInputChangeVal=(e)=>{
        setInputVal(e.target.value);
    }
    return (
        <div
            className={`${styles.inputDiv} ${inputFocus ? styles.borderColorF : styles.borderColor} ${IsSign?styles.inputSign:''}
            ${IsSignLog? styles.signLogInput:''}
            `}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
        >
            <input
                className={`${styles.input}  `}
                required=""
                name={name}
                type={type}
                onChange={(handelInputChangeVal)}
                min={min}
                {...prop}

            />
            <label className={inputVal.length>0?styles.valInput:''}>{placeholder}</label>
        </div>

    );
}

export default Input;
