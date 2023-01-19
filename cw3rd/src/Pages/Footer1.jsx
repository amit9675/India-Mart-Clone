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
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Footer1 = () => {
  return (
    <div>
      {mid1()}
      {mid2()}
    </div>
  );
};

export default Footer1;
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
