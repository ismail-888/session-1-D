import { useState } from "react";

function Input(props) {
    const [value,setValue] = useState();
    return (
        <>
            <label>{props.label}</label> 
            <br/>
            <span>{value}</span>
            <input type={props.type} onChange={(e) => {
                setValue(e.target.value);
        }} />
        </>
    )
}

export default Input;