import React, {Component} from "react";
import StatePropsComponent from "./005-state-component-props/StatePropsComponent";

export default class App extends Component {
    render() {
        return(
            <div>
                <StatePropsComponent time={20}/>
            </div>
        )
    }
}