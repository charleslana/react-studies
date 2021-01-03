import React, {Component} from "react";
import './style.css';

class StyleComponent extends Component {

    render() {
        return(
            <div>
                <h1 className={"red"}>Hello Dev!</h1>
                <h1 className={"green"}>Hello Dev!</h1>
                <MyStyle/>
            </div>
        )
    }
}

class MyStyle extends Component {

    render() {
        return(
            <div>
                <h2 className={"my-style"}>My Style</h2>
            </div>
        )
    }
}

export default StyleComponent;