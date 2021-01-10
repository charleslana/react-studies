import React, {ChangeEvent, Component} from "react";

class SelectComponent extends Component {

    state = {
        item: 4
    }

    changeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState({item: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>Select option:</h1>
                <select name="" id="" onChange={this.changeSelect} value={this.state.item}>
                    <option value="1">Item 1</option>
                    <option value="2">Item 2</option>
                    <option value="3">Item 3</option>
                    <option value="4">Item 4</option>
                </select>
                <h2>Option selected: {this.state.item}</h2>
            </div>
        );
    }
}

export default SelectComponent;
