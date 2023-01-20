import React from "react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Button,
  Heading,
  Input,
} from "@chakra-ui/react";
const Footer2 = () => {
  return (
    <div>


    <div style={{boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,width:"85%",margin:"auto",marginTop:"50px",height:"350px",gap:"20px"}}>
    <div>
        <Heading mb={"40px"}>Find Top Suppliers</Heading>
    </div>
      <div
        style={{
          display: "flex",
          justifyContent:"space-between",
          width: "90%",
        //   height: px",
          margin: "auto",
        //   marginTop:"400px"
        //   border: "2px solid pink",
        }}
      >
        {/* 6 divs here */}
        <div>
          {" "}
          <Image
            borderRadius="full"
            boxSize="70px"
            border={"2px solid "}
            src="https://media.istockphoto.com/id/510318234/vector/india-gate-vector-sketch-illustration-war-memorial-new-delhi-india.jpg?s=612x612&w=0&k=20&c=1qR8nBQ4tr_m8ZYbWGZQBwhGslykrtTLfCjn5W5LtSg= "
            alt="Dan Abramov"
          />
          <h6>Delhi</h6>
        </div>
        <div>
          {" "}
          <Image
            borderRadius="full"
            boxSize="70px"
            border={"2px solid "}
            src="https://media.istockphoto.com/id/803582852/vector/outline-bangalore-skyline-with-historic-buildings.jpg?s=612x612&w=0&k=20&c=XuvM1a9Xa6q8VtHDohqlaXoYzgpkIPaJz7vK_dZ3LWA= "
            alt="Dan Abramov"
          />
          <h6>Bengaluru</h6>
        </div>
        <div>
          {" "}
          <Image
            borderRadius="full"
            boxSize="70px"
            border={"2px solid "}
            src="https://media.istockphoto.com/id/1013016158/vector/india-skyline-monuments-of-india.jpg?s=612x612&w=0&k=20&c=GGB73au2rh047LOhmVpk6i7rqjRV2lCpcz5pTiCD9L0= "
            alt="Dan Abramov"
          />
          <h6>Chennai</h6>
        </div>
        <div>
          {" "}
          <Image
            borderRadius="full"
            boxSize="70px"
            border={"2px solid "}
            src="https://media.istockphoto.com/id/1202633940/vector/outline-mumbai-india-city-skyline-with-historic-buildings-isolated-on-white.jpg?s=612x612&w=0&k=20&c=uxTd5yh9jy7dA47uiqVBZ_ZdQQhidlPht1EYQgXVsHQ="
            alt="Dan Abramov"
          />
          <h6>Mumbai</h6>
        </div>
        <div>
          {" "}
          <Image
            borderRadius="full"
            boxSize="70px"
            border={"2px solid "}
            src="https://media.istockphoto.com/id/1295079894/vector/corner-pillars-of-the-mosque-of-rani-sipri-ki-masjid-ahmedabad-gujarat-india.jpg?s=612x612&w=0&k=20&c=IlrIg1w5QHgSn6duvLlDkNMu8N7P_CrXrh8n9RfNRRA="
            alt="Dan Abramov"
          />
          <h6>Ahemdabad</h6>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent:"space-between",
          width: "90%",
          height: "45%",
          margin: "auto",
          marginTop:"50px"
        //   border: "2px solid red",
        }}
      >
        <div>
          {" "}
          <Image
            borderRadius="full"
            boxSize="70px"
            border={"2px solid "}
            src="https://media.istockphoto.com/id/1203104555/vector/outline-kolkata-india-city-skyline-with-historic-buildings-isolated-on-white.jpg?s=612x612&w=0&k=20&c=SC37XfqjYqYRyUhjMdfWzo6EbjybDoJBYrCkmqs5wE0="
            alt="Dan Abramov"
          />
          <h6>Kolkata</h6>
        </div>
        {/* 6 divs here */}
        <div>
          {" "}
          <Image
            borderRadius="full"
            boxSize="70px"
            border={"2px solid "}
            src="https://media.istockphoto.com/id/845844506/vector/pune-city-skyline-india.jpg?s=612x612&w=0&k=20&c=rELIXaPe3fzwqRdCbL5x7_XtUiKhVQijK_MtTksWmvA= "
            alt="Dan Abramov"
          />
          <h6>Pune</h6>
        </div>
        <div>
          {" "}
          <Image
            borderRadius="full"
            boxSize="70px"
            border={"2px solid "}
            src="https://media.istockphoto.com/id/930794766/vector/surat-capital-of-gujarat-india-in-the-16th-century.jpg?s=612x612&w=0&k=20&c=Q6kSFrGpHhr0CdJs_DVBE2GvA6xsc6J4ivEslKGg-EE= "
            alt="Dan Abramov"
          />
          <h6>Surat</h6>
        </div>
        <div>
          {" "}
          <Image
            borderRadius="full"
            boxSize="70px"
            border={"2px solid "}
            src="https://media.istockphoto.com/id/1306335010/vector/hawa-mahal-and-principal-street-jaipur-india-woodcut-published-1893.jpg?s=612x612&w=0&k=20&c=i8N3HC9aeUpYGLRlU7cgOwCJ0VvEd71sXpopOCLs3vo= "
            alt="Dan Abramov"
          />
          <h6>Jaipur</h6>
        </div>
        <div>
          {" "}
          <Image
            borderRadius="full"
            boxSize="70px"
            border={"2px solid "}
            src="https://media.istockphoto.com/id/1306603966/vector/outline-hyderabad-india-city-skyline-with-historical-buildings-isolated-on-white.jpg?s=612x612&w=0&k=20&c=kt05s9gTPO3cSITePd3ZBmCVuAMIKe6GhuNWHkzFvRE="
          />
          <h6>Hyderabad</h6>
        </div>
      </div>
    </div>
  {mid1()}
  {mid2()}
    </div>
  );
};

export default Footer2;
function mid1() {
  return (
    <div>
      .
      <div
        style={{
          borderTop: "4px solid rgb(46,49,146)",
          display: "flex",
          width: "85%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <Heading mt={6}>
          Pharmaceutical Drug, Medicine, Medical Care & Consultation
        </Heading>
      </div>
      <div
        style={{
          display: "flex",
          width: "85%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=800")`,
            height: "450px",
            flex: "2.5",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <div
            style={{
              marginTop: "260px",
              marginLeft: "20px",
              color: " rgb(255,255,255)",
              textAlign: "start",
            }}
          >
            <Heading as="h6" size="xs">
              Prefabricated Houses
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Scafolding Planks & Planes
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Construction Machines
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Crushing Machine & Plants
            </Heading>
          </div>
        </div>
        <div
          style={{
            flex: "8",
            display: "grid",
            marginLeft: "20px",
            gap: "20px",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
        >
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              gap: "20px",
              justifyContent: "space-evenly",
              gap: "20px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://5.imimg.com/data5/KT/MJ/MY-16675294/pharmaceutical-drug-125x125.jpg"
                alt="error"
                marginTop="35px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="0">
                Anticoagulant and Antiplatelet Drugs
              </Heading>
              <Heading size="xs" mt="2">
                Antiparasitic Drug
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Antibiotic Tablets, Capsule & Syrup
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Antifungal Injection, Tablet & Syrup
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://5.imimg.com/data5/PQ/HW/MY-7191707/thinq-mass-gainer-282-lbs-29-125x125.png"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div
              style={{
                marginTop: "20px",
                flex: "7",
                textAlign: "start",
                marginLeft: "5px",
              }}
            >
              <Heading as="h6" size="xs" mt="1">
                Fitness Supplements
              </Heading>
              <Heading size="xs" mt="2">
                Weight Gain Nutrition
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Weight Gain Capsule
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Pre workout Supplements
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Immune Booster
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/JR/DH/GLADMIN-7427/nutritional-supplements-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Vitamin Tablets & Capsules
              </Heading>
              <Heading size="xs" mt="2">
                Weight Loss Supplement
              </Heading>
              <Link to="login">
                <Heading as="h6" size="xs" mt="2">
                  Dietary Supplements
                </Heading>
                <Heading as="h6" size="xs" mt="2">
                  Mineral Supplement
                </Heading>
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/BA/YT/MY-2018319/multidisciplinary-care-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Medical Treatment Services
              </Heading>
              <Heading size="xs" mt="2">
                Dental Treatment Services
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Medical Surgery Services
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Eye Treatment
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Plastic Surgery Services
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://5.imimg.com/data5/JM/MB/MY-4222986/8-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Medical Test Services Blood Testing
              </Heading>
              <Heading size="xs" mt="2">
                CT Scan Services
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Ultrasound Services
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                ECHO Cardiography
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://5.imimg.com/data5/YC/QB/MY-3773531/allopathic-pcd-pharma-franchise-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                PCD Pharma Franchise
              </Heading>
              <Heading size="xs" mt="2">
                Pharma Franchise
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Allopathic PCD Pharma Franchise
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Ayurvedic PCD Pharma Franchise
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Veterinary PCD Pharma Franchise
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function mid2() {
  return (
    <div>
      .
      <div
        style={{
          borderTop: "4px solid rgb(46,49,146)",
          display: "flex",
          width: "85%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <Heading mt={6}>
          Pharmaceutical Drug, Medicine, Medical Care & Consultation
        </Heading>
      </div>
      <div
        style={{
          display: "flex",
          width: "85%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            backgroundImage: `url("https://hm.imimg.com/imhome_gifs/apparel-clothing-garments.jpg")`,
            height: "450px",
            flex: "2.5",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <div
            style={{
              marginTop: "260px",
              marginLeft: "20px",
              color: " rgb(255,255,255)",
              textAlign: "start",
            }}
          >
            <Heading as="h6" size="xs">
              Apparel & Clothing Fabric
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Kids Wear Ladies Suits & Dress Material
            </Heading>{" "}
          </div>
        </div>
        <div
          style={{
            flex: "8",
            display: "grid",
            marginLeft: "20px",
            gap: "20px",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
        >
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              gap: "20px",
              justifyContent: "space-evenly",
              gap: "20px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/OC/VP/GLADMIN-43237/ladies-kurtis-125x125.jpg"
                alt="error"
                marginTop="35px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="0">
                Ladies Kurtis
              </Heading>
              <Heading size="xs" mt="2">
                Designer Kurtis
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Cotton Kurti
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Ladies Woolen Kurti
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/EK/BM/GLADMIN-2296/mens-t-shirts-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div
              style={{
                marginTop: "20px",
                flex: "7",
                textAlign: "start",
                marginLeft: "5px",
              }}
            >
              <Heading as="h6" size="md" mt="1">
                Mens T-Shirts
              </Heading>
              <Heading size="xs" mt="2">
                Mens Round Neck T Shirt
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Mens Polo T Shirt
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Graphic Printed T-Shirt
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/CS/SE/MY-2/blazers-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Blazers
              </Heading>
              <Heading size="xs" mt="2">
                Mens Blazer
              </Heading>
              <Link to="login">
                <Heading as="h6" size="xs" mt="2">
                  Womens Blazer
                </Heading>
                <Heading as="h6" size="xs" mt="2">
                  Designer Blazer
                </Heading>
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/XM/FR/GLADMIN-8367/safety-shoes-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Safety Shoes
              </Heading>
              <Heading size="xs" mt="2">
                Leather Safety Shoes
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Steel Toe Safety Shoes
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Industrial Shoes
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="	https://3.imimg.com/data3/MM/IB/GLADMIN-2576/trouser-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Trouser
              </Heading>
              <Heading size="xs" mt="2">
                Cargo Pant
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Jogger Pant
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Chino Trousers
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="	https://5.imimg.com/data5/FK/WJ/GLADMIN-2/synthetic-fabric-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Mannequins
              </Heading>
              <Heading size="xs" mt="2">
                Female Mannequins
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Dress Forms
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Male Mannequins
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/FH/NO/GLADMIN-1110/mannequins-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Commercial Uniforms
              </Heading>
              <Heading size="xs" mt="2">
                Worker Uniform
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Housekeeping Uniform
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Corporate Uniform
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="	https://5.imimg.com/data5/PP/PP/GLADMIN-/commercial-uniforms-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Shirt
              </Heading>
              <Heading size="xs" mt="2">
                Printed Shirt
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Designer Shirt
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Plain Shirt
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="	https://3.imimg.com/data3/RR/YL/GLADMIN-105908/shirt-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Synthetic Fabric
              </Heading>
              <Heading size="xs" mt="2">
                Rayon Fabrics
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Faux Fur Fabric
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Viscose Fabrics
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
