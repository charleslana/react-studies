import React, {Component} from "react";
import ReactDOM from "react-dom";

const content = {
    textAlign: 'center' as 'center'
}

const buttonResetStyle = {
    marginLeft: 10,
    border: 'none',
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: 5,
    width: 100,
    height: 25,
    outline: 'none',
    cursor: 'pointer'
}

const buttonResetStyleHover = {
    ...buttonResetStyle,
    backgroundColor: 'black'
}

interface InterfaceProps {
    startName?: string;
    realName?: string;
}

class ChallengeApp extends Component {

    render() {
        return (
            <div style={content}>
                <h1>Challenge</h1>
                <hr/>
                <ChangeName startName={'Test 1'} realName={'Test 2'}/>
                <ChangeName startName={'Test 3'} realName={'Test 4'}/>
                <ChangeName startName={'Test 5'} realName={'Test 6'}/>
                <ChangeName/>
            </div>
        );
    }
}

class ChangeName extends Component<InterfaceProps> {

    state = {
        name: this.props.startName,
        buttonResetHover: false
    }

    changeClick = () => {
        this.setState({name: this.props.realName});
    }

    reset = () => {
        this.setState({name: this.props.startName});
    }

    toggleHover = () => {
        this.setState({
            buttonResetHover: !this.state.buttonResetHover
        });
    }

    render() {
        return(
            <div>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeClick}>Change</button>
                <button style={
                    this.state.buttonResetHover?
                        buttonResetStyleHover :
                        buttonResetStyle
                }
                        onClick={this.reset}
                        onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <ChallengeApp/>
    </React.StrictMode>,
    document.getElementById('challenge')
);

export default ChallengeApp;
