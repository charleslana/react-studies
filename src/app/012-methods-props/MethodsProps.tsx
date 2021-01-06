import React, {Component} from "react";

interface InterfaceProps {
    functionA?(): void;
    functionB?(): void;
}

interface InterfaceState {
    text?: string;
}

class MethodsProps extends Component<InterfaceProps & InterfaceState> {

    state = {
        text: 'Text'
    }

    clickA = () => {
        this.setState({text: 'Click A.'});
    }

    clickB = () => {
        this.setState({text: 'Click B.'});
    }

    render() {
        return (
            <div>
                <MethodsA functionA={this.clickA} text={this.state.text}/>
                <MethodsB functionB={this.clickB}/>
            </div>
        );
    }
}

class MethodsA extends Component<InterfaceProps & InterfaceState> {

    render() {
        return(
            <div>
                <h1>Return of text in method A: {this.props.text}</h1>
                <button onClick={this.props.functionA}>Method A</button>
            </div>
        )
    }
}

class MethodsB extends Component<InterfaceProps & InterfaceState> {

    render() {
        return(
            <div>
                <button onClick={this.props.functionB}>Method B</button>
            </div>
        )
    }
}

export default MethodsProps;