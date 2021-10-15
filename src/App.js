import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Components from './components/Components';
import ProductProvider from './context/ProductProvider';
import ServiceProvider from './context/ServiceProvider';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ProductProvider>
          <ServiceProvider>
            <Components />
          </ServiceProvider>
        </ProductProvider>
      </CartProvider>
    </div>
  );
}

export default App;
