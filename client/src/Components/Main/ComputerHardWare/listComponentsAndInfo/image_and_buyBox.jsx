import React from 'react';
import { ProductConsumer } from '../../../../context';

function Image_and_buy({product}) {
    return (
        <div className="image_and_buy">
            <div className="image">
                <img src={product.picture} alt="" />
            </div>
            <div className="box_buy">
                <div className="price_and_btnBuy">
                    <div className="price">
                        <span>${product.price}</span>
                    </div>
                    <div className="btnCart">
                        {<ProductConsumer>
                            {
                                value => {
                                    return (
                                        <button onClick={() => value.addToCart(product)}> Add to cart</button>
                                    )
                                }
                            }
                        </ProductConsumer>}
                        <span><i className="fas fa-exclamation-circle"></i>in stock</span>
                    </div>

                </div>
                <div className="credit">
                    <p>From <span>$56.45</span>/ month (APR 14.9%)</p>
                    <img src={require('../../../../images/motherboard/paypal.PNG')} alt="" />
                </div>
                <div className="box_finance">
                    <p>With a <span>5%</span> deposit from just <span>$29.37</span>/ month (APR 15.9%)</p>

                    <div className="finace">
                        <h5>PC-Store Finance</h5>
                        <span><i className="fas fa-exclamation-circle"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Image_and_buy;
