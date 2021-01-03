import React, {Component} from "react";

class FirstComponent extends Component {

    render(){
        return(
            <div>
                <h1>My first text!</h1>
                <SecondaryComponent/>
                <ThirdComponent/>
            </div>
        );
    }
}

class SecondaryComponent extends Component {
    render() {
        return(
            <div>
                <h2>My secondary text</h2>
            </div>
        )
    }
}

class ThirdComponent extends Component {
    render() {
        return(
            <div>
                <h3>My third text</h3>
            </div>
        )
    }
}

export default FirstComponent;