import React from 'react'

 function Backdrop({clickCloseSlideMenu}) {
    return (
      <div className="backdrop" onClick={clickCloseSlideMenu}></div>
    )
}
export default Backdrop
