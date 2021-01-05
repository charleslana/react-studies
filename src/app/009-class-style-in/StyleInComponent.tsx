import React, {Component} from "react";

class StyleInComponent extends Component {

    style = {
        color: 'white',
        backgroundColor: 'gray',
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 20,
        margin: 0,
        width: '100%',
        textAlign: 'center' as 'center',
    }

    render() {
        return (
            <div>
                <h1 style={this.style}>Text example</h1>
            </div>
        );
    }
}

export default StyleInComponent;
