import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import speakerCategory from '../assets/images/speaker-category.png';
import plugAdapter from '../assets/images/plug-adapter.png';
import chargingStand from '../assets/images/charging-stand.png';
import './ShopByCategory.css';

const CATEGORIES = [
  {
    id: 1,
    title: 'Speakers',
    description: 'Powerful sound for every moment.',
    image: speakerCategory,
  },
  {
    id: 2,
    title: 'Accessories',
    description: 'Essential add-ons for your devices.',
    image: plugAdapter,
  },
  {
    id: 3,
    title: 'Wireless Charger',
    description: 'Fast charging. Zero cables. Maximum ease.',
    image: chargingStand,
  },
];

function ShopByCategory() {
  return (
    <section className="category">
      <div className="container">
        <div className="category__header">
          <h2>Shop By Category</h2>
          <div className="category__arrows">
            <button type="button" className="category__arrow-btn" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="category__arrow-btn" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="category__grid">
          {CATEGORIES.map((cat) => (
            <article key={cat.id} className="category-card">
              <h3 className="category-card__title">{cat.title}</h3>
              <p className="category-card__desc">{cat.description}</p>
              <a href="#" className="category-card__link">
                View Accessories <ArrowRight size={15} />
              </a>
              <div className="category-card__image-wrap">
                <img src={cat.image} alt={cat.title} className="category-card__image" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopByCategory;
