import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import FixedFormatPrice from '../../fixedFormatPrice';
import ClickedInfoImage from './clickedInfoImage';

class NoEmptyCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infoClickedProductCart: -200,
            currentProduct: {}
        }
    }

    showInfoProduct = (product) => {
        let tempProduct = { product };
        this.setState({
            infoClickedProductCart: 0,
            currentProduct: tempProduct
        });
    }
    hideInfoProduct = () => {
        this.setState({
            infoClickedProductCart: -200,
        });
    }

    render() {
        let product = {};
        if (this.state.currentProduct.product !== undefined) {
            product = this.state.currentProduct.product
        }
        let showZiroProduct = 'ziro_product';
        let { cart, orderTotal, removeAndAddProduct } = this.props
        return (
            <Fragment>
                < ClickedInfoImage 
                    product={product}
                    infoClickedProductCart={this.state.infoClickedProductCart}
                    hideInfoProduct={this.hideInfoProduct}
                />
                <div className="bg_cart">
                    <br />
                    <div className="res_tab">
                        <table>
                            <tbody>
                                <tr>
                                    <th>picture</th>
                                    <th className="fixed_name_length">name</th>
                                    <th>price</th>
                                    <th>quantity</th>
                                    <th>total price</th>
                                </tr>
                                {cart.map((product) => {
                                    let a = product.price;
                                    let b = product.countOrder;
                                    let result = a * b;
                                    orderTotal += result;
                                    return (<tr key={product.id}>
                                        <td><img src={product.picture} alt="" onClick={(e) => this.showInfoProduct(product)} /></td>
                                        <td className="item_name">{product.itemOfModel_name}</td>
                                        <td className="price_item_name">${product.price}</td>
                                        <td className="quantity_buttons">
                                            {product.countOrder === 0
                                                ? <span className={"product_couter " + showZiroProduct}>{product.countOrder}</span>
                                                : <span className="product_couter">{product.countOrder}</span>
                                            }
                                            <button className="btn_increment" onClick={() => removeAndAddProduct(product, 'increment')}>+</button>
                                            <button className="btn_subtract" onClick={() => removeAndAddProduct(product, 'subtract')}>-</button>
                                        </td>
                                        <td>
                                            <div className="last_box_cart">
                                                <span className="price_item_name">${FixedFormatPrice.formatCurrency(result)}</span>

                                                <Link className="quantity_remove" to="/cart" onClick={() => removeAndAddProduct(product, 'remove')}> <i className="fas fa-trash-alt"></i> </Link>
                                            </div>
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                            <div className="order_total">
                                <span>Order total: ${FixedFormatPrice.formatCurrency(orderTotal)}</span>
                            </div>
                        </table>
                    </div>
                    <br />
                </div>
            </Fragment>
        )
    }
}
export default NoEmptyCart;