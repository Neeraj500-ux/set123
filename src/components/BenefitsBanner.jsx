import { Package, ShoppingBag, ShieldCheck } from 'lucide-react';
import './BenefitsBanner.css';

const BENEFITS = [
  {
    icon: Package,
    title: 'Free Delivery',
    desc: 'Free shipping on all orders over $50.',
  },
  {
    icon: ShoppingBag,
    title: 'Easy Returns',
    desc: '30-day easy returns guaranteed.',
  },
  {
    icon: ShieldCheck,
    title: '1 Year Warranty',
    desc: 'Quality assurance with 1 year warranty.',
  },
];

function BenefitsBanner() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__card">
          <h2 className="benefits__heading">
            Experience Streamlined
            <br />
            Shopping With Crescendo
          </h2>

          <div className="benefits__grid">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="benefit-item">
                <div className="benefit-item__icon">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="benefit-item__title">{title}</h3>
                  <p className="benefit-item__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button type="button" className="btn btn--primary">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default BenefitsBanner;
