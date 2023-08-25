import React from "react";

class Welcome extends React.Component {
//    1st method
    // state = {
    //     fisrtName: "ismail",
    //     lastName:"Bakhach"
    // }

    // 2nd method
    constructor(props) {
        console.log('consturctor phase');
        super(props);
        this.state = {
            fisrtName: "ismail",
            lastName:"Bakhach"
        }
    }

// hon 3mlneha arrow function la2n l this 3m tkoun undefind 
    changeName=() =>{
        this.setState({
            lastName: "3absi"
        });
    }

    render() {
        console.log('render phase');
        console.log(this.state);
        return (
            <>
                <h1>Hello, {this.props.name}</h1>
                {/* l this.props ijet mn l base class li 3melnelu extends. wl name ijet mn l props li ne7na 7etayneha bl app.js */}
                <p>age: {this.props.age}</p>
                <p>title: {this.props.title}</p>
                <button onClick={this.changeName}>
                    change my Name 'ktabna l this la2n ne7na b 2alb class'
                </button >
                <h6>created by, {this.state.fisrtName} {this.state.lastName}</h6>
            </>
        );
    }
    componentDidMount() {
        // iza badi 23ml shi metl l setstate 2w update hon besta3mlon bl didmount ma bl render
      
        console.log('componentDidMount phase');
    }
}

export default Welcome;