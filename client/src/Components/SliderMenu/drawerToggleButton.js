import React from 'react'

 function DrawerToggleButton({click}) {
    return (
        <button className="toggle_button" onClick={click}>
            <div className="toggle_button_line"></div>
            <div className="toggle_button_line"></div>
            <div className="toggle_button_line"></div>
        </button>
    )
}
export default DrawerToggleButton
