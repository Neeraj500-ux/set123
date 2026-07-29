import ProductCard from './ProductCard';
import earbuds from '../assets/images/earbuds.png';
import headphonesHero from '../assets/images/headphones-hero.png';
import speakerPurple from '../assets/images/speaker-purple.png';
import './FeaturedProducts.css';

const PRODUCTS = [
  { id: 1, image: earbuds, category: 'Earbuds', name: 'Earbud Y168A', price: 270 },
  { id: 2, image: headphonesHero, category: 'Headphones', name: 'Pro X168A', price: 250 },
  { id: 3, image: speakerPurple, category: 'Speakers', name: 'Speaker P168A', price: 240 },
];

function FeaturedProducts() {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured__header">
          <h2>Featured Products</h2>
          <button type="button" className="btn btn--ghost btn--sm">
            See All Products
          </button>
        </div>

        <div className="featured__grid">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
