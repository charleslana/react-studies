import React, {Component} from "react";
import {BrowserRouter} from 'react-router-dom';
import MenuComponent from "./MenuComponent";
import RoutesComponent from "./RoutesComponent";

class IndexComponent extends Component {
    render() {
        return (
            <BrowserRouter>
            <MenuComponent/>
            <div>
                <RoutesComponent/>
            </div>
            </BrowserRouter>
        );
    }
}

export default IndexComponent;
