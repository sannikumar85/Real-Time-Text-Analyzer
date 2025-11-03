import AddToWishlistButton from "./AddToWishlistButton";
import "../styles/ProductDetails.css";

const ProductDetails = ({ product }) => {
    if (!product) return <p className="no-selection">Select a product to view details</p>;
    return (
        <div className="product-details">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <AddToWishlistButton product={product} />
        </div>
    );
};

export default ProductDetails;
