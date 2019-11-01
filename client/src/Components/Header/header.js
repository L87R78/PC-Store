import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerToggleButton from '../SliderMenu/drawerToggleButton';

const Header = ({ drawerClickHandler }) => {

    return (
        <header>
            <div className="toolbar_navigation">
                <div className="toggleBtn_logo">
                    <div className="tollbar_toggle_button">
                        < DrawerToggleButton click={drawerClickHandler} />
                    </div>

                    {/* <div className="toolbar_logo">
                        <span><img src={require('../../images/logo.png')} alt="" /></span>
                    </div> */}
                </div>

                <div className="toolbar_navigations_items">
                    <ul>
                        <li><NavLink exact={true} to="/" activeStyle={{ color: "#464343" }}>Home </NavLink></li>
                        <li><NavLink to="/games" activeStyle={{ color: "#464343" }}>Games</NavLink></li>
                        <li><NavLink to="/computerHardWare" activeStyle={{ color: "#464343" }}>Hardware</NavLink></li>
                        <li><NavLink to="/laptops" activeStyle={{ color: "#464343" }}>Laptops</NavLink></li>
                        <li><NavLink to="/audio" activeStyle={{ color: "#464343" }}>Audio</NavLink></li>
                        <li><NavLink to="/software" activeStyle={{ color: "#464343" }}>Software</NavLink></li>
                        <li><NavLink to="/networking" activeStyle={{ color: "#464343" }}>Networking</NavLink></li>
                        <li><NavLink to="/mobile" activeStyle={{ color: "#464343" }}>Mobile</NavLink></li>
                        <li><NavLink to="/contacts" activeStyle={{ color: "#464343" }}>Contacts</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;


