import './App.css';
import ProductCard from './components/productCard/ProductCard';
import ProductList from './mockData/productList'

function App() {
  
    return (
      <div className="App">
      {ProductList.map(product => {
        return(
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
            review={product.review}
            isPrime={product.isPrime}
          />
        )
      })}
      </div>
    );
  
}

export default App;
