import logo from "./logo.svg";
import "./App.css";
// import DesktopSubNav from "./Components/Dummy"
import Navbar from "./Components/Navbar";
import NavbarAhead1 from "./Components/NavbarAhead1";
import AllRoutes from "./Components/AllRoutes";
import NavbarAhead2 from "./Components/NavbarAhead2";
import Mid from "./Pages/Mid";
import { Divider } from "@chakra-ui/react";
import Footer from "./Pages/Footer";
import Footer1 from "./Pages/Footer1";
import Footer2 from "./Pages/Footer2";
import Footer3 from "./Pages/Footer3";
import Footer4 from "./Pages/Footer4";
import EndFooter from "./Pages/EndFooter";
import LargeWithAppLinksAndSocial from "./Pages/FinalFooter";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "rgb(243,243,243)" }}>
   <Nav/>
      <NavbarAhead1 />
      <NavbarAhead2 />
      <Mid />

      <Footer />
      <Footer1 />
      <Footer2 />
      <Footer3 />
      <Footer4 />
      <EndFooter/>
      <LargeWithAppLinksAndSocial/>
    </div>
  );
}

export default App;
