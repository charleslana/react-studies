import React, {Component} from "react";

interface InterfaceProps {
    lastName?: string
}

interface InterfaceState {
    name: string,
    age: number,
    best: boolean
}

class ConstructorComponent extends Component<InterfaceProps, InterfaceState> {

    constructor(props: InterfaceProps) {
        super(props);

        this.state = {
            name: 'Test',
            age: 30,
            best: true
        }
    }

    render() {
        return (
            <div>
                <h1>Name: {this.state.name} {this.props.lastName}</h1>
                <h2>Age: {this.state.age}</h2>
            </div>
        );
    }
}

export default ConstructorComponent;
