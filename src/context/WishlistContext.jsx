import { createContext, useReducer, useContext } from "react";
import "../styles/App.css";

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return [...state, action.payload];
        case "REMOVE_FROM_WISHLIST":
            return state.filter(product => product.id !== action.payload.id);
        default:
            return state;
    }
};

export const WishlistProvider = ({ children }) => {
    const [wishlist, dispatch] = useReducer(wishlistReducer, []);
    return (
        <WishlistContext.Provider value={{ wishlist, dispatch }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
