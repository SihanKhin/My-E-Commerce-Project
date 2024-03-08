
import {Routes, Route} from 'react-router-dom'
import  Footer from './pages/Footer'
import Home from './pages/Home';
import Products from './features/products/Products';
import Header from './pages/Header';
import Cart from './pages/Cart';
import MenProducts from './pages/MenProducts';
import WomenProducts from './pages/WomenProducts';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import ElectronicProducts from './pages/ElectronicProducts'
import JeweleryProducts from './pages/JeweleryProducts'
function App() {
  return (
    <div className="flex flex-grow flex-col justify-center items-center min-h-screen">
         <Header />
         {/* <Sidebar /> */}
            <Routes>
              <Route path='/home' element={<Home />}/>
              <Route path='/products' element={<Products />}/>
              <Route path='/products/:proId' element={<ProductDetails/>} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/men' element={<MenProducts />}/>
              <Route path='/women' element={<WomenProducts />} />
              <Route path='/electronic' element={<ElectronicProducts />} />
              <Route path='/jewelery' element={<JeweleryProducts />} />
              <Route path='/about' element={<About />} />
              
            </Routes>
            {/* <Footer /> */}
    </div>
  );
}

export default App;
