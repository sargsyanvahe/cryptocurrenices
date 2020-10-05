import React from "react";
import SearchContainer from "./SearchContainer";
import SelectPP from "./SelectPP";

import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";

import logo from '../../assets/logo.png';

import './Header.css';

function Header(props) {

    const path = props.location.pathname.split('/')[1];

    return (
        <div className="Header">
            <Link to={'/'}>
                <img className='Header-logo' src={logo} alt=""/>
            </Link>
            <SearchContainer/>
            {path === 'page' && <SelectPP/>}
        </div>
    );

}

export default withRouter(Header);