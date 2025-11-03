import { useWishlist } from "../context/WishlistContext";
import "../styles/Button.css";

const AddToWishlistButton = ({ product }) => {
    const { dispatch } = useWishlist();
    return (
        <button className="wishlist-button" 
                onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: product })}>
            Add to Wishlist
        </button>
    );
};

export default AddToWishlistButton;
