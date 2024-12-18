import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { state } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            {state.cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {state.cart.map(item => (
                        <li key={item.id}>
                            {item.name} - Quantity: {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
