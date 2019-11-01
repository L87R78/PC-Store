import React from 'react';
import { NavLink } from 'react-router-dom';

function SideDrawer({ show, clickCloseSlideMenu }) {
    let drawerClass = 'side_drawer';
    if (show) {
        drawerClass = 'side_drawer open';
    }

    return (
        <nav className={drawerClass} >
            <ul>
                <li><NavLink to="/" onClick={clickCloseSlideMenu} >Home</NavLink></li>
                <li><NavLink to="/games" onClick={clickCloseSlideMenu} >Games</NavLink></li>
                <li><NavLink to="/computerHardWare" onClick={clickCloseSlideMenu}>PC-Hardware</NavLink></li>
                <li><NavLink to="/laptops" onClick={clickCloseSlideMenu}>Laptops</NavLink></li>
                <li><NavLink to="/contacts" onClick={clickCloseSlideMenu}>Contacts</NavLink></li>
            </ul>
            <button onClick={clickCloseSlideMenu} className="btn_hide_siteDrawer" ><i className="fas fa-angle-double-up"></i></button>
        </nav>
    )
}
export default SideDrawer
