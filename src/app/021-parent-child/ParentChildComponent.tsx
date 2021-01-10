import React, {Component} from 'react';

interface InterfaceProps {
    sendFunction: Function;
}

interface InterfaceChildTheChild {
    name?: string;
}

class ParentChildComponent extends Component<InterfaceChildTheChild> {

    state = {
        name: 'Test'
    }

    change = (value: string) => {
        this.setState({name: value});
    }

    render() {
        return (
            <div>
                <h1>Parent</h1>
                <h2>Name: {this.state.name}</h2>
                <hr/>
                <Child sendFunction={this.change} name={this.state.name}/>
            </div>
        );
    }
}

class Child extends Component<InterfaceProps & InterfaceChildTheChild> {

    change = () => {
        this.props.sendFunction('Test 2');
    }

    render() {
        return(
            <div>
                <h1>Child</h1>
                <button onClick={this.change}>Change</button>
                <hr/>
                <ChildTheChild name={this.props.name}/>
            </div>
        )
    }
}

class ChildTheChild extends Component<InterfaceChildTheChild> {

    render() {
        return(
            <div>
                <h3>Child the child</h3>
                <p>Name: {this.props.name}</p>
            </div>
        )
    }
}

export default ParentChildComponent;