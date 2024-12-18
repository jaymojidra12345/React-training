import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductList = () => {
    const { state, dispatch } = useContext(CartContext);

    const handleAddToCart = (productId) => {
        dispatch({ type: "ADD_TO_CART", payload: { productId } });
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {state.products.map(product => (
                    <li key={product.id}>
                        {product.name} - Stock: {product.stock}
                        <button
                            onClick={() => handleAddToCart(product.id)}
                            disabled={product.stock === 0}
                            style={{ marginLeft: "10px" }}
                        >
                            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
