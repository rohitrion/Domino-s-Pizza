import logo from './logo.svg';
import './App.css';
import Header from './Componenet/Header';
import CardsDetails from './Componenet/CardsDetails';
import Cards from './Componenet/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Fav from './Componenet/Cart';
import Cheakout from './Componenet/Cheakout';
import Footer from './Componenet/Footer';
import Sidebar from './Componenet/Sidebar';
import Cart from './Componenet/Cart';

function App() {
  return (
    <>


      <Header />
      
      <Routes>

       <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/cheakout" element={<Cheakout />} />
      </Routes>
  <Sidebar/>
     <Footer/>
    </>
  );
}

export default App;
