import React, {ChangeEvent, Component} from "react";

class TextareaComponent extends Component {

    state = {
        text: 'Hello Dev!'
    }

    changeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>Describe text:</h1>
                <textarea name="" id="" cols={30} rows={10} value={this.state.text} onChange={this.changeTextarea}>

                </textarea>
                <h2>Text described: {this.state.text}</h2>
            </div>
        );
    }
}

export default TextareaComponent;
