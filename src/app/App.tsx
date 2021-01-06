import React, {Component} from "react";
import SumComponent from "./007-sum-component/SumComponent";

export default class App extends Component {
    render() {
        return(
            <div>
                <SumComponent valueA={0}/>
            </div>
        )
    }
}