import React from 'react';
import TShirt from '../TShirt/TShirt';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Oder Summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                >X</button></p>)
            }
        </div>
    );
};

export default Cart;