import React from 'react';
import EmptyCart from './emptyCart';
import NoEmptyCart from './noEmptyCart';

const PrintCart = ({ cart, orderTotal, removeAndAddProduct }) => {

    return (
        <div>
            {cart.length === 0
                ? < EmptyCart />
                : < NoEmptyCart
                    cart={cart}
                    orderTotal={orderTotal}
                    removeAndAddProduct={removeAndAddProduct}
                />
            }
        </div>
    )
}
export default PrintCart;


