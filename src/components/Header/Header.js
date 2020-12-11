import React from 'react';
import PropTypes from 'prop-types';

import {

    NavLink
} from "react-router-dom";



import { HamburgerCollapse } from 'react-animated-burgers';

import './Header.css';
import { noop } from '../../utils';

const Header = ({
    isMobile,
    handleShowSideMenu,
    showSideBar
}) => {
    return (
        <div className='header-container'>
            <div>
                <p className='header-title'>Alldeals.ro</p>
            </div>
            <div className='nav-container'>
                <NavLink
                    exact
                    className='nav-link'
                    activeClassName='nav-link-active'
                    to="/">Acasa</NavLink>

                <NavLink
                    className='nav-link'
                    activeClassName='nav-link-active'
                    to="/produse">Produse</NavLink>
                {
                    isMobile &&  (
                        <HamburgerCollapse
                            className='menu-button'
                            isActive={showSideBar}
                            toggleButton={handleShowSideMenu(!showSideBar)} />
                    )
                }
            </div>

        </div>
    )
}

Header.propTypes = {
    isMobile: PropTypes.bool,
    showSideBar: PropTypes.bool,
    handleShowSideMenu: PropTypes.func
}

Header.defaultProps = {
    isMobile: false,
    showSideBar: false,
    handleShowSideMenu: noop
}

export default Header;