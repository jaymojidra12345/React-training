import React, { createContext, useReducer } from "react";

// Initial State
const initialState = {
    products: [
        { id: 1, name: "Laptop", stock: 10 },
        { id: 2, name: "Smartphone", stock: 15 },
        { id: 3, name: "Headphones", stock: 20 },
    ],
    cart: [],
};

// Reducer Function
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const { productId } = action.payload;

            const product = state.products.find(p => p.id === productId);

            if (product && product.stock > 0) {
                const updatedProducts = state.products.map(p =>
                    p.id === productId ? { ...p, stock: p.stock - 1 } : p
                );

                const existingCartItem = state.cart.find(item => item.id === productId);
                const updatedCart = existingCartItem
                    ? state.cart.map(item =>
                          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                      )
                    : [...state.cart, { id: productId, name: product.name, quantity: 1 }];

                return { ...state, products: updatedProducts, cart: updatedCart };
            }

            return state; // No stock left
        }

        default:
            return state;
    }
};

// Create Context
export const CartContext = createContext();

// Context Provider Component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
