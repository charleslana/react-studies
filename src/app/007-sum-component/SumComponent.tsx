import React, {ChangeEvent, Component} from "react";

interface InterfaceSumA {
    valueA: number;
}

interface InterfaceSumB {
    valueB?: number;
}

export class SumComponent extends Component<InterfaceSumA & InterfaceSumB> {

    state = {
        valueA: this.props.valueA,
        valueB: 0
    }

    onChangeA = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({valueA: parseInt(event.target.value)});
    }

    onChangeB = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({valueB: parseInt(event.target.value)});
    }

    sum() {
        return this.state.valueA + this.state.valueB;
    }

    render() {
        return(
            <div>
                <h1>Sum: {this.sum()}</h1>
                <input onChange={this.onChangeA}/>
                <input onChange={this.onChangeB}/>
            </div>
        )
    }
}

export default SumComponent;