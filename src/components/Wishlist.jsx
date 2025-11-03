import { useWishlist } from "../context/WishlistContext";
import "../styles/Wishlist.css";

const Wishlist = () => {
    const { wishlist, dispatch } = useWishlist();
    return (
        <div className="wishlist-container">
            <h2>Wishlist</h2>
            {wishlist.map(product => (
                <div key={product.id} className="wishlist-item">
                    <h3>{product.name}</h3>
                    <button className="remove-button" 
                            onClick={() => dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Wishlist;
