import React, {Component} from "react";

interface InterfaceProps {
    name?: string;
}

interface InterfaceState {
    name: string;
}

class LifeCycleComponent extends Component<InterfaceProps, InterfaceState> {

    constructor(props: InterfaceProps) {
        super(props);

        this.state = {
            name: 'Test'
        }

        console.log('constructor');
    }

    componentDidMount() {
        console.log('mount');
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    componentDidUpdate(prevProps: Readonly<InterfaceProps>, prevState: Readonly<InterfaceState>, snapshot?: any) {
        console.log('updated');
    }

    handleClick = () => {
        this.setState({name: 'Test 2'});
        console.log('Test 2');
    }

    render() {

        console.log('render');

        return (
            <div>
                <h1>Life Cycle</h1>
                <h2>Hello {this.state.name}!</h2>
                <button onClick={this.handleClick}>Click</button>
                <br/>
                <UseProps name={this.state.name}/>
            </div>
        );
    }
}

class UseProps extends Component<InterfaceProps> {

    render() {

        console.log('render 2');

        return(
            <div>
                <h3>Props: {this.props.name}</h3>
            </div>
        )
    }
}

export default LifeCycleComponent;