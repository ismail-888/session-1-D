import { useState } from "react";

function WelcomeFC(props) {
    let [counter, setCounter] = useState(0);
    // let [name, setName] = useState('ahmed');
    return (
        <>
        <h1>Hello,{props.name}</h1>
        <p>age:{props.age}</p>
        <p>title:{props.title}</p>
        <h6>{counter}</h6>
        <button onClick={() => {
                setCounter(counter++)
                // setName("ismail")
            }}
            >
                +
        </button >
        </>
    );
            
}

export default WelcomeFC;