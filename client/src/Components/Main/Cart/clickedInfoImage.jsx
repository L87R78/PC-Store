import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerInfoClickedProductCart = styled.div`
    left: ${props => props.infoClickedProductCart}%;
`;

class ClickedInfo extends Component {
    render() {
        let { product, hideInfoProduct } = this.props;
        return (
            <ContainerInfoClickedProductCart className="infoClickedProductCart" infoClickedProductCart={this.props.infoClickedProductCart}>
                <div className="image_box">
                    <img src={product.picture} alt="" />
                    <h3>{product.itemOfModel_name}</h3>
                </div>
               
                <div className="info_box">
                    <h4>Specifications</h4>
                    <div className="info_box_text">
                        <h5>In progress...</h5>
                    </div>
                </div>
                <Link className="btnSlideHide" onClick={(e) => hideInfoProduct('-200')}><i class="fas fa-angle-double-left"></i></Link>
            </ContainerInfoClickedProductCart>
        )
    }
}
export default ClickedInfo;
