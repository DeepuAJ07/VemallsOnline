import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Details from './Components/Details';
import Card from './Components/Card';
import Footer from './Components/Footer';
import BusinessCard from './Components/BusinessCard';
import Shop from './Components/Shop';
import ServicessNear from './Components/ServicessNear';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>

   <Banner/>
   <Details/>
<Card/>

    
    <BusinessCard/>
    <Shop/>
    <ServicessNear/>
    <Footer/>
    </Router>
    </>
 
  );
}

export default App;
