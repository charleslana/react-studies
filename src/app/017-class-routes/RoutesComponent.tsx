import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import HomeComponent from "./HomeComponent";
import ContactComponent from "./ContactComponent";

class RoutesComponent extends Component {

    render() {
        return (
            <div>
                <Switch/>
                <Route path={"/"} exact={true} component={HomeComponent}/>
                <Route path={"/contact"} exact={true} component={ContactComponent}/>
            </div>
        );
    }
}

export default RoutesComponent;
