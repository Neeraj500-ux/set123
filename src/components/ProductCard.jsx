import { ShoppingCart } from 'lucide-react';
import './ProductCard.css';

function ProductCard({ image, category, name, price }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img src={image} alt={name} className="product-card__image" />
      </div>

      <div className="product-card__body">
        <p className="product-card__category">{category}</p>
        <h3 className="product-card__name">{name}</h3>

        <div className="product-card__footer">
          <span className="product-card__price">$ {price.toFixed(2)} USD</span>
          <button
            type="button"
            className="product-card__cart-btn"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingCart size={17} strokeWidth={2} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
