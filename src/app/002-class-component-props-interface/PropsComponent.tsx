import React, {Component} from "react";

interface InterfaceProps {
    name: string;
    age: number;
}

interface InterfaceAge {
    age: number;
}

class PropsComponent extends Component<InterfaceProps> {

    render() {
        return(
            <div>
                <h1>My name is: {this.props.name}</h1>
                <Age age={this.props.age}/>
            </div>
        )
    }
}

class Age extends Component<InterfaceAge> {

    render() {
        return(
            <div>
                <h2>My age is: {this.props.age}</h2>
            </div>
        )
    }
}

export default PropsComponent;