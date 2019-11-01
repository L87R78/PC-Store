import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../../../../context';
import ContainerWishList from './wishList';

class ShowListChilds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infoClickedWishList: -1000,
            currentProduct: {},
            showCurrentProductClicked: 'hide',
        }
    }
    showWishList = (product) => {
        this.setState({
            infoClickedWishList: 50,
            currentProduct: product
        });
    }
    hideWishList = (e) => {
        this.setState({
            infoClickedWishList: e,
        });
    }

    render() {
        let { key, item, handleCurrentClickChild, afterCurrClickHideShowAllProducts} = this.props;
        return (
            <Fragment>
                < ContainerWishList
                    infoClickedWishList={this.state.infoClickedWishList}
                    hideInfoProduct={this.hideWishList}
                    currentProduct={this.state.currentProduct}
                />
            
                <div className="childs_product" key={key}>
                    <div className="left_side_childs_product">
                        <div className="child_img">
                            <Link to='#' onClick={() => afterCurrClickHideShowAllProducts(item)}> <img src={item.picture} alt="" /></Link>
                        </div>
                        <div className="child_name">
                            <span>BUNDLE</span>
                            <Link to={'#'} onClick={(e) =>
                                handleCurrentClickChild(item, key)}>{item.itemOfModel_name}</Link>
                            <span className="customer_review">customer review <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                        </div>
                    </div>
                    <div className="right_side_childs_product" >
                        <div className="child_price">
                            <h4>$<span>{item.price}</span></h4>
                            <h6>$5.48 <span>next day delivery</span></h6>
                        </div>
                        <div className="child_btnAddToCart">
                            <div className="wish_list">
                                <button onClick={(e) => this.showWishList(item)} ><i className="fas fa-heart"></i></button>
                            </div>
                            <div className="btnCart">
                                {<ProductConsumer>
                                    {
                                        value => {
                                            return (
                                                <button onClick={() => value.addToCart(item)}> Add to cart</button>
                                            )
                                        }
                                    }
                                </ProductConsumer>}
                            </div>
                            <span><i className="fas fa-exclamation-circle"></i>in stock</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default ShowListChilds;