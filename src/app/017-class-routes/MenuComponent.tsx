import React, {Component} from "react";
import {Link} from 'react-router-dom';
import style from './style.module.scss';

class MenuComponent extends Component {

    render() {
        return (
            <div className={style.container}>
                <Link to={"/"} className={style.menu}>To Home</Link>
                <Link to={"/contact"} className={style.menu}>To Contact</Link>
            </div>
        );
    }
}

export default MenuComponent;
