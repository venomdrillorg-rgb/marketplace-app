import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import placeholder components
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SellerSignup from './pages/SellerSignup';
import SellerLogin from './pages/SellerLogin';
import SellerDashboard from './pages/SellerDashboard';
import BuyerLogin from './pages/BuyerLogin';
import OrderStatus from './pages/OrderStatus';
import AdminPanel from './pages/AdminPanel';
import Leaderboard from './pages/Leaderboard';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Router>
        <header className="p-4 text-white text-center text-3xl font-bold">
          My E-Commerce Site
        </header>
        <main className="p-4">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/seller/signup' element={<SellerSignup />} />
            <Route path='/seller/login' element={<SellerLogin />} />
            <Route path='/seller/dashboard' element={<SellerDashboard />} />
            <Route path='/buyer/login' element={<BuyerLogin />} />
            <Route path='/order/status' element={<OrderStatus />} />
            <Route path='/admin' element={<AdminPanel />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
          </Routes>
        </main>
        <footer className="p-4 text-white text-center">
          &copy; {new Date().getFullYear()} My E-Commerce Site
        </footer>
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;