import React  from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerWishList = styled.div`
    right: ${props => props.infoClickedWishList}%;
`;

const WishList = ({ infoClickedWishList, hideInfoProduct, currentProduct }) => {

    return (
        <ContainerWishList className="wish_list_show" infoClickedWishList={infoClickedWishList}>
            <div className="btn_wish_list">
                <button><i className="fas fa-heart"></i></button>
                <span>Add to wish list</span>
            </div>
            <div className="image_and_info">
                <img src={currentProduct.picture} alt="" />
                <span className="name">{currentProduct.itemOfModel_name}</span>
                <span>${currentProduct.price}</span>
            </div>
            <button className="login">Login to add to your wish list</button>
            <div className="create_account">
                <span>New to PC-Store?</span>
                <button className="create_account">Create your PC-Store account now</button>
            </div>
            <Link to="#" className="btnCloseWishList" onClick={(e) => hideInfoProduct('-1000')}><i className="fas fa-times"></i></Link>
        </ContainerWishList>
    )
}
export default WishList;
