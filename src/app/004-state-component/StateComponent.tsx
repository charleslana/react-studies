import React, {Component} from "react";

class StateComponent extends Component {

    state = {
        time: 0
    }

    updateTime = () => {
        this.setState({time: this.state.time + 1});
    }

    resetTime = () => {
        this.setState({time: 0});
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

export default StateComponent;