import { Component } from "react";

export class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count : 5
        };
    }

    Increment = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    Decrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return(
            <>
            <h2>Welcome</h2>
            <h3>{this.state.count}</h3>
            <button onClick={this.Increment}>Increase</button>
            <button onClick={this.Decrement}>Decrease</button>
            </>
        )
    }
}