import React, {ChangeEvent, Component} from "react";

class DestructuringComponent extends Component {

    state = {
        name: 'Test',
        age: 30,
        hobby: 'Programming',
        best: true,
        physical: {
            weight: 60,
            height: 1.70,
        }
    }

    changeWeight = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            physical: {
                weight: event.target.value
            }
        });
    }

    render() {
        const {name} = this.state;

        const {weight} = this.state.physical;

        return(
            <div>
                <h1>Name: {name}</h1>
                <h2>Weight: {weight}</h2>
                <input onChange={this.changeWeight}/>
            </div>
        )
    }
}

export default DestructuringComponent;