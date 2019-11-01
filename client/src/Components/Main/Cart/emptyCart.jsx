import React, { Fragment } from 'react';

const EmptyCart = () => {
    return (
        < Fragment >
            <div className="bg_cart">
                <br />
                <div className="res_tab">
                    <table>
                        <tbody>
                            <tr>
                                <th>picture</th>
                                <th>name</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>total price</th>
                            </tr>
                        </tbody>
                    </table>
                    <span className="empty_text">Your Shopping Cart is empty.</span>
                </div>
            </div>
        </Fragment >
    )
}
export default EmptyCart;