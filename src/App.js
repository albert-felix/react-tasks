import './App.css';
import ProductCard from './components/productCard/ProductCard';
import yonex from './images/yonex.webp'

function App() {
  return (
    <div className="App">
      <ProductCard
        image={yonex}
        title="Yonex Arcsaber 71 Light Graphite Badminton Raquet with free Full Cover (77 grams, 30 lbs Tension)"
        price={2500}
        rating={4}
        review={250}
        isPrime={true}
      />
    </div>
  );
}

export default App;
