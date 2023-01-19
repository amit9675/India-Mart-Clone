import { CheckIcon, EmailIcon, SearchIcon, ViewIcon } from "@chakra-ui/icons";
import { Button, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// import { Heading } from '@chakra-ui/react'
export default function NavbarAhead2() {
  const [isAuth, setisAuth] = React.useState(false);

  const handleClick = () => {
    setisAuth(!isAuth);
    console.log(isAuth);
    // getMeData()
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleClick} leftIcon={<ViewIcon />} variant="solid">
          Building&Construction
        </Button>
        <Button onClick={handleClick} leftIcon={<ViewIcon />} variant="solid">
          Electronics & Electricals
        </Button>
        <Button onClick={handleClick} leftIcon={<ViewIcon />} variant="solid">
          Drugs & Pharma
        </Button>
        <Button onClick={handleClick} leftIcon={<ViewIcon />} variant="solid">
          Industrial Machinary
        </Button>
        <Button onClick={handleClick} leftIcon={<ViewIcon />} variant="solid">
          Industrial Supplies
        </Button>
        <Button onClick={handleClick} leftIcon={<ViewIcon />} variant="solid">
          Food & Agri.
        </Button>
      </div>
      {isAuth ? GetMeData() : InsteadData()}
    </div>
  );
}
const InsteadData = () => {
  return (
    <div
      style={{
        width: "80%",
     
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        marginTop: "40px",
        border:"2px solid black"
      }}
    >
      <div style={{ flex: "3", marginTop: "80px", textAlign: "center" ,height:"10%" }}>
        <Heading>
          We connect <br />
          Buyers & sellers
        </Heading>
        <p>
          IndiaMART is India's largest online B2B marketplace, connecting buyers
          with suppliers.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
            height:"80%",
          }}
        >
          <div>
            <CheckIcon />
            <h1>Trust</h1>
          </div>
          <div>
            <CheckIcon />
            <h1>Safe & Secure</h1>
          </div>
          <div>
            <EmailIcon />
            <h1>Quick Assistant</h1>
          </div>
        </div>
      </div>
      <div style={{ flex: "6" }}>
        <img
          src="https://hm.imimg.com/imhome_gifs/stressed-to-relaxed.jpg"
          alt="errr"
        />
      </div>
    </div>
  );
};
const GetMeData = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div >
        <Heading as="h5" size="sm">
          Wood,Plywood,veneer & <br></br> Laminates
        </Heading>
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Plywoods
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Laminate Sheets
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Wood Boards
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Wall Panels
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Hardwood
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Particle Board
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          MDF Board
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Wooden Planks
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          WPC Board
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Wood Veeneer
        </a>
        <br />
      </div>
      <div>
        <Heading as="h5" size="sm">
          Steel Bars rods plates & <br></br> Sheets
        </Heading>
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          TMT Bars
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Steel Plates
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Stainless Steel Sheet
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Steel Rods
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Mild Steel Bars
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Steel Bars
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Steel Round Bars
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Stanless Steel Bars
        </a>
        <br />
      </div>
      <div>
        <Heading as="h5" size="sm">
          Roofing & <br></br> ceiling
        </Heading>
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Roliling Sheets
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          False ceiling
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Metal roofing Sheets
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          GI Sheets
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Polycabonate Sheet
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Roof Tiles
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Ceiling Panels
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Profile Sheets
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Ceiling Accesories
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Celing Board
        </a>
        <br />
      </div>
      <div>
        <Heading as="h5" size="sm">
          PVC,FRPHDPE & <br></br>Other Plastic Pipes
        </Heading>
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          PVC Pipes
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Plumbing Pipe
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Borewell Pipes
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Industrial Plastic Pipes
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          CPVC Pipes
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Drainage Pipes
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          UPVC Water Pipes
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Sanitary Pipes
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Drip Irrigation Pipes
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Underground HDPE pipes
        </a>
        <br />
      </div>
      <div>
        <Heading as="h5" size="sm">
          Building & Construction<br></br> Machines
        </Heading>
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html"></a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Brick Making Machines
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Construction Machines
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Crushing Machines & Plants
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Block Making Machines
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Concrete Mixers
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Construction Drum Mixers
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Building Tools
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Concrete Equipment
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html"></a>
        Vibratory Compactors
        <br />
      </div>
      <div>
        <Heading as="h5" size="sm">
          Wood,Plywood,veneer & <br></br> Laminates
        </Heading>
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Plywoods
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Laminate Sheets
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Wood Boards
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Wall Panels
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Hardwood
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Particle Board
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          MDF Board
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Wooden Planks
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          WPC Board
        </a>
        <br />
        <a href="https://dir.indiamart.com/impcat/engineeredboards.html">
          Wood Veeneer
        </a>
        <br />
      </div>
    </div>
  );
};
