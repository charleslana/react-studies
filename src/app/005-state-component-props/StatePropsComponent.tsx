import React, {Component} from "react";

interface InterfaceState {
    time: number;
}

class StatePropsComponent extends Component<InterfaceState> {

    state = {
        time: this.props.time
    }

    updateTime = () => {
        this.setState({time: this.state.time + 1});
    }

    resetTime = () => {
        this.setState({time: this.props.time});
    }

    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
                <div>
                    <button onClick={this.updateTime}>Update + 1</button>
                </div>
                <div>
                    <button onClick={this.resetTime}>Reset</button>
                </div>
            </div>
        );
    }
}

export default StatePropsComponent;