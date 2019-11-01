import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import laptops from '../../../images/home_images/laptops.PNG';
import desktops from '../../../images/home_images/desktops.PNG';

class Home extends Component {
    render() {
        return (
            <div className="bg_home">
                <div className="center_image_home">
                  
                    <div className="links_products_home">
                        <div className="link_item_product_laptops">
                            <Link to="/laptops">  <img src={laptops} style={{ background: '#6DB3F2' }} onClick={this.scrollTop} alt="" /></Link>
                        </div>
                        <div className="link_item_product_desktops">
                            <Link to="/computerHardWare"> <img src={desktops} onClick={this.scrollTop} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Home);