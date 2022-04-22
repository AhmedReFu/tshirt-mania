import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional Rendering Options
    // 1. Element variable
    // 2. Ternary operator condition ? true : false

    let command;
    if (cart.length === 0) {
        command = <p>Please Add Product</p>
    }
    else if (cart.length === 1) {
        command = <p><small>Please Add more</small></p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>

            <h2>Items Selected: {cart.length}</h2>
            {command}
            {
                cart.map(tshirt =>
                    <div className='cart-item'>
                        <img src={tshirt.picture} alt="" />
                        <p>{tshirt.name}
                            <button onClick={() => handleRemoveFromCart(tshirt)}>X</button></p>
                    </div>
                )
            }
            {cart.length === 0 || <p className='orange'> YAY You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>
                    Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>
            </div>}
            {cart.length !== 7 ? <p>Keep Adding</p> : <button onClick={() => handleRemoveFromCart(cart)}>Remove All</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;