import logo from './logo.svg';
import './App.css';
// import DesktopSubNav from "./Components/Dummy"
import Navbar from './Components/Navbar';
import NavbarAhead1 from './Components/NavbarAhead1';
import AllRoutes from './Components/AllRoutes';
import NavbarAhead2 from './Components/NavbarAhead2';
import Mid from './Pages/Mid';
import { Divider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <NavbarAhead1/>
   <NavbarAhead2/>
   <Mid/>
   <AllRoutes/>
    </div>
  );
}

export default App;
