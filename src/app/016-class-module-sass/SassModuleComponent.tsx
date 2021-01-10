import React, {Component} from "react";
import './style.scss';
import style from './style.module.scss';

class SassModuleComponent extends Component {

    render() {
        return (
            <div>
                <div className={`${style.styleA} grid-9`}>Hello Dev!</div>
                <div className={`${style.styleB} grid-3`}>Hello World!</div>
            </div>
        );
    }
}

export default SassModuleComponent;
