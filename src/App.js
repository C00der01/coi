import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
import Header from './components/Header';
import Exchanges from './components/Exchanges'
import Footer from './components/Footer';


function App() {
  return (
   <Router>
    <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/coin' element={<Coins/>}/>
            <Route path='/coin/:id' element={<CoinDetails/>}/>
            <Route path='/exchanges' element={<Exchanges/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
