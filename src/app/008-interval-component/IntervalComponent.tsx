import React, {Component} from "react";

class IntervalComponent extends Component {

    timerId: any;

    state = {
        date: new Date(),
        button: true
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.clock(), 1000);
        this.setState({button: true});
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        this.setState({button: false});
    }

    clock() {
        this.setState({date: new Date()});
    }

    render() {
        const {button} = this.state;
        return(
            <div>
                <h1>Time: {this.state.date.toLocaleTimeString()}</h1>
                {button?
                <button onClick={() => this.componentWillUnmount()}>Stop</button>
                    : <button onClick={() => this.componentDidMount()}>Start</button>
                }
            </div>
        )
    }
}

export default IntervalComponent;