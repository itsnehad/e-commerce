import { Route, Routes } from 'react-router-dom';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Placeorder from './pages/Placeorder';
import Product from './pages/Product'; // Make sure this is imported
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import '../react-toastify/dist'
import Verify from './pages/Verify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/place-order' element={<Placeorder />} />
        <Route path='/product/:productId' element={<Product />} /> {/* Ensure this is correct */}
        <Route path='/verify' element={<Verify />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
