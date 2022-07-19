import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux/es/exports';

function App() {

  const shwCart = useSelector(state => state.cartToggle.showCart);

  return (
    <Layout>
     {shwCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
