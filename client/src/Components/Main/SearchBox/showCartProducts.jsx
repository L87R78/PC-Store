import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FixedFormatPrice from '../../fixedFormatPrice';

class ShowCartProducts extends Component {
    render() {
        let orderTotal = 0;
        this.props.cart.map((product) => {
            let a = product.price;
            let b = product.countOrder;
            let result = a * b;
            orderTotal += result;
        })
        return (
            <div className="cart_box">
                <NavLink to="/cart">
                    <div className="cart">
                        <div className="count_products">
                            <span>{this.props.count}</span>
                        </div>

                        <i className="fas fa-shopping-cart"></i>
                        <div className="productsNums">
                            <span>${FixedFormatPrice.formatCurrency(orderTotal)}</span>
                        </div>
                    </div>
                </NavLink>
            </div>
        )
    }
}
export default ShowCartProducts;
