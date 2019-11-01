import React from 'react';
import { ProductConsumer } from './../../../context';
import PrintCart from './printCart';

const Cart = () => {
    return (
        <ProductConsumer>
            {value => {
                return (< PrintCart
                    cart={value.cart}
                    orderTotal={value.orderTotal}
                    removeAndAddProduct={value.removeAndAddProduct}
                />)
            }}
        </ProductConsumer>
    )
}
export default Cart;
