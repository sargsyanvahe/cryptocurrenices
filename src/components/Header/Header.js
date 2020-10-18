import React from "react";
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";

import SearchContainer from "./SearchContainer";
import SelectPP from "./SelectPP";

import logo from '../../assets/logo.png';

import './Header.css';

function Header(props) {

    const path = props.location.pathname.split('/')[1];

    return (
        <div className="header">
            <Link to={'/'}>
                <img className='header-logo' src={logo} alt=""/>
            </Link>
            <SearchContainer/>
            {path === 'page' && <SelectPP/>}
        </div>
    );

}

export default withRouter(Header);