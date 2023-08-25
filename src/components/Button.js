function Button(props) {
    const btnHandler = () => {
        console.log('hello');
    }
    const mouseLeaveHandler = () => {
        console.log('mouseLeaveHandler');
    }
    return (
        //b 2alb l onClick l function ma b7etla () iza b7eton bisir l code byetnafaz mn doun ma 23ml click
        <button className="react-btn" onMouseEnter={btnHandler} onMouseLeave={mouseLeaveHandler}> 
            {props.title}
        </button>
    )
}

export default Button;