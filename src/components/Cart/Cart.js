import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = (total * 0.1).toFixed(2);  //returns a string
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items : {props.cart.length}</p>
            <p>Total Price: {total} $ </p>
            <p>Total Shipping Fee: {shipping}</p>
            <p>Tax: {tax} $ </p>
            <h4>Grand Price: {grandTotal} $</h4>
        </div>
    );
};

export default Cart;