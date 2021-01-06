import React, {Component} from "react";
import ConstructorComponent from "./010-class-constructor/ConstructorComponent";

export default class App extends Component {
    render() {
        return(
            <div>
                <ConstructorComponent lastName={'App'}/>
            </div>
        )
    }
}