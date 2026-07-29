import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ShopByCategory from './components/ShopByCategory';
import BenefitsBanner from './components/BenefitsBanner';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <ShopByCategory />
        <BenefitsBanner />
      </main>
      <Footer />
    </>
  );
}

export default App;
