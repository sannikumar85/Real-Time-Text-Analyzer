import AddToWishlistButton from "./AddToWishlistButton";
import "../styles/ProductList.css";

const ProductList = ({ products, onSelectProduct }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card" 
                     onClick={() => onSelectProduct(product)}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <AddToWishlistButton product={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
