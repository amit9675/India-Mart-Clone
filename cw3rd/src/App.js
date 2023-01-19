import logo from './logo.svg';
import './App.css';
// import DesktopSubNav from "./Components/Dummy"
import Navbar from './Components/Navbar';
import NavbarAhead1 from './Components/NavbarAhead1';
import AllRoutes from './Components/AllRoutes';
import NavbarAhead2 from './Components/NavbarAhead2';
import Mid from './Pages/Mid';
import { Divider } from '@chakra-ui/react';
import Footer from './Pages/Footer';
import Footer1 from './Pages/Footer1';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <NavbarAhead1/>
   <NavbarAhead2/>
   <Mid/>
  
   <Footer/>
   <Footer1/>
    </div>
  );
}

export default App;
