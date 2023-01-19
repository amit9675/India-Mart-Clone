import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Divider, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Mid() {
  return (
    <div>
      <div
        style={{
          borderTop: "4px solid rgb(46,49,146)",
          display: "flex",
          width: "85%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <Heading>Building Construction Material & Equipment</Heading>
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
            backgroundImage: `url("https://cdn.pixabay.com/photo/2013/10/08/20/31/road-construction-192894__480.jpg")`,
            height: "450px",
            gap: "700px",
            flex: "2.5",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <div
            style={{
              marginTop: "260px",
              marginLeft: "20px",
              color: "white",
              textAlign: "start",
            }}
          >
            <Heading as="h6" size="xs" mt={3}>
              Prefabricated Houses
            </Heading>{" "}
            <Heading as="h6" size="xs" mt={4}>
              Scafolding Planks & Planes
            </Heading>{" "}
            <Heading as="h6" size="xs" mt={4}>
              Construction Machines
            </Heading>{" "}
            <Heading as="h6" size="xs" mt={4}>
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
            gridTemplateColumns: "repeat(3,3fr)",
          }}
        >
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              gap: "20px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/RS/UH/GLADMIN-5385/brick-making-machines-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Brick backing Machines
              </Heading>
              <Heading size="xs" mt="2">
                Fly Ash Brick Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Clay Brick Backing Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Cement Brick Backing Machines
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/KS/JQ/GLADMIN-2475/tmt-bars-125x125.jpg"
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
                Brick backing Machines
              </Heading>
              <Heading size="xs" mt="2">
                Fly Ash Brick Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Clay Brick Backing Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Cement Brick Backing Machines
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/OI/XL/GLADMIN-34562/passenger-lifts-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Residential Elevator
              </Heading>
              <Heading size="xs" mt="2">
                Kone Passenger Lift
              </Heading>
              <Link to="login">
                <Heading as="h6" size="xs" mt="2">
                  Stair Lift
                </Heading>
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://5.imimg.com/data5/QO/YD/GLADMIN-2/plywoods-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Brick backing Machines
              </Heading>
              <Heading size="xs" mt="2">
                Fly Ash Brick Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Clay Brick Backing Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Cement Brick Backing Machines
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/JE/DA/MY-2/hydraulic-excavator-500x500-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Brick backing Machines
              </Heading>
              <Heading size="xs" mt="2">
                Fly Ash Brick Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Clay Brick Backing Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Cement Brick Backing Machines
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/VG/QG/GLADMIN-27799/emulsion-paints-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Brick backing Machines
              </Heading>
              <Heading size="xs" mt="2">
                Fly Ash Brick Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Clay Brick Backing Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Cement Brick Backing Machines
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/UT/PB/GLADMIN-12558/wood-door-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Brick backing Machines
              </Heading>
              <Heading size="xs" mt="2">
                Fly Ash Brick Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Clay Brick Backing Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Cement Brick Backing Machines
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/VN/LA/GLADMIN-2047/pvc-pipes-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Brick backing Machines
              </Heading>
              <Heading size="xs" mt="2">
                Fly Ash Brick Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Clay Brick Backing Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Cement Brick Backing Machines
              </Heading>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "0px",
            }}
          >
            <div style={{ flex: "3" }}>
              <Image
                src="https://3.imimg.com/data3/YD/WE/GLADMIN-23639/building-brick-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="xs" mt="1">
                Brick backing Machines
              </Heading>
              <Heading size="xs" mt="2">
                Fly Ash Brick Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Clay Brick Backing Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Cement Brick Backing Machines
              </Heading>
            </div>
          </div>
        </div>
      </div>
      {mid1()}
      {mid3()}
      {mid2()}
      {mid4()}
      {mid2()}
      {mid1()}
      {mid3()}
      {mid4()}
    </div>
  );
}
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
              color: "black",
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
        <Heading mt={6}>Electronics & Electrical Goods & Supplies</Heading>
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
            backgroundImage: `url("https://hm.imimg.com/imhome_gifs/electronics-electrical-goods.jpg")`,
            height: "450px",
            gap: "700px",
            flex: "2.5",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <div
            style={{
              marginTop: "260px",
              marginLeft: "20px",
              color: "white",
              textAlign: "start",
            }}
          >
            <Heading as="h6" size="xs">
              Office Automation Products
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Multifunction Printer
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Xerox Machines
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Fingerprint Scanners
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
                src="https://4.imimg.com/data4/HI/RA/GLADMIN-181283/photocopier-machine-125x125.jpg"
                alt="error"
                marginTop="35px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="0">
                Sensors & Transducers
              </Heading>
              <Heading size="xs" mt="2">
                Level Sensors
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Proximity Sensor
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Sensor for Home & Office
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Load Cell
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
                src="	https://5.imimg.com/data5/GLADMIN/Default/2022/3/MZ/VG/IH/87924/arduino-sensor-125x125.jpg"
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
                Office Automation Products
              </Heading>
              <Heading size="xs" mt="2">
                Sensor for Home & Office
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Multifunction Printer
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Sensor for Home & Office
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Electronics Items
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
                src="	https://5.imimg.com/data5/JW/EX/GLADMIN-2/digital-controller-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Process Controllers
              </Heading>
              <Heading size="xs" mt="2">
                Level Controllers
              </Heading>
              <Link to="login">
                <Heading as="h6" size="xs" mt="2">
                  Motor Controllers
                </Heading>
                <Heading as="h6" size="xs" mt="2">
                  Temperature Controller
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
                src="https://5.imimg.com/data5/RO/JS/GLADMIN-2/lighting-controllers1-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Control & Automation
              </Heading>
              <Heading size="xs" mt="2">
                VFD
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                PLC
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                HMI
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
                src="https://3.imimg.com/data3/XB/KH/GLADMIN-105874/light-emitting-diode-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Diodes & Active Devices
              </Heading>
              <Heading size="xs" mt="2">
                Integrated Circuits
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Thyristors
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Light Emitting Diode
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
                src="https://5.imimg.com/data5/GLADMIN/Default/2022/6/SI/KH/VT/87924/house-wire-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Wires & Cables
              </Heading>
              <Heading size="xs" mt="3">
                House Wire
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Armoured Cable
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Power Cable
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
                src="	https://5.imimg.com/data5/VB/IL/GLADMIN-2/street-light-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Commercial Lights
              </Heading>
              <Heading size="xs" mt="3">
                Flood Lights
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Street Lights
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Panel Light
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
                src="https://5.imimg.com/data5/LX/YW/GLADMIN-2/inverter-batteries-125x125.png"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Battries
              </Heading>
              <Heading size="xs" mt="3">
                Lithium Battery
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Inverter Batteries
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Electric Vehicle Battery
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
                src="https://3.imimg.com/data3/EX/HO/GLADMIN-37340/solar-power-systems-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Solar & Renewable Energy
              </Heading>
              <Heading size="xs" mt="3">
                Solar Panels
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Solar Inverter
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Solar Pumps
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function mid3() {
  return (
    <div>
      <div
        style={{
          borderTop: "4px solid rgb(46,49,146)",
          display: "flex",
          width: "85%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <Heading mt={6}>Hospital and Medical Equipment</Heading>
      </div>
      <div
        style={{
          display: "flex",
          width: "85%",
          margin: "auto",
          height: "90%",
          marginTop: "30px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <div
          style={{
            backgroundImage: `url("https://hm.imimg.com/imhome_gifs/bigBn04.jpg")`,
            height: "450px",
            gap: "700px",
            flex: "2.5",
            display: "flex",
            justifyContent: "start",
            width: "90%",
          }}
        >
          <div
            style={{
              marginTop: "260px",
              marginLeft: "20px",
              color: "white",
              textAlign: "start",
            }}
          >
            <Heading as="h6" size="xs">
              Medical Ventilators
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Oxygen Cylinder
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Patient Handling Equipment
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              CPAP, BiPAP Machine & Accessories
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
                src="https://4.imimg.com/data4/HI/RA/GLADMIN-181283/photocopier-machine-125x125.jpg"
                alt="error"
                marginTop="35px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="0">
                Medical Laboratory Instruments
              </Heading>
              <Heading size="xs" mt="2">
                Rapid Test Kit
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Biochemistry Analyzer
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Blood Bank Equipments
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Hematology Analyzers
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
                src="	https://5.imimg.com/data5/GLADMIN/Default/2022/3/MZ/VG/IH/87924/arduino-sensor-125x125.jpg"
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
                Patient Monitoring Systems
              </Heading>
              <Heading size="xs" mt="2">
                Blood Pressure Machine
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Capnometer
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Medical Monitor
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Surgical Monitor
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
                src="	https://5.imimg.com/data5/JW/EX/GLADMIN-2/digital-controller-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Thermometer
              </Heading>
              <Heading size="xs" mt="2">
                Infrared Thermometers
              </Heading>
              <Link to="login">
                <Heading as="h6" size="xs" mt="2">
                  Forehead Thermometer
                </Heading>
                <Heading as="h6" size="xs" mt="2">
                  Non Contact Thermometer
                </Heading>
                <Heading as="h6" size="xs" mt="2">
                  Digital Thermometers
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
                src="https://5.imimg.com/data5/RO/JS/GLADMIN-2/lighting-controllers1-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Medical Imaging Machine
              </Heading>
              <Heading size="xs" mt="2">
                X Ray Machine
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Ultrasound Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                ECG Machine
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Doppler Machine
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
                src="https://3.imimg.com/data3/XB/KH/GLADMIN-105874/light-emitting-diode-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Stethoscope
              </Heading>
              <Heading size="xs" mt="2">
                Cardiology Stethoscope
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Dual Head Stethoscope
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Electronic Stethoscope
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Pediatric Stethoscope
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
                src="https://5.imimg.com/data5/GLADMIN/Default/2022/6/SI/KH/VT/87924/house-wire-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Suction Machine
              </Heading>
              <Heading size="xs" mt="3">
                Electric Suction Unit
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Foot Operated Suction Unit
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Liposuction Machine
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Central Suction System
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function mid4() {
  return (
    <div>
      <div
        style={{
          borderTop: "4px solid rgb(46,49,146)",
          display: "flex",
          width: "85%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <Heading mt={6}>Industrial Plants, Machinery & Equipment</Heading>
      </div>
      <div
        style={{
          display: "flex",
          width: "85%",
          margin: "auto",
          height: "90%",
          marginTop: "30px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <div
          style={{
            backgroundImage: `url("https://hm.imimg.com/imhome_gifs/industrial-plants-machinery.jpg")`,
            height: "450px",
            gap: "700px",
            flex: "2.5",
            display: "flex",
            justifyContent: "start",
            width: "90%",
          }}
        >
          <div
            style={{
              marginTop: "260px",
              marginLeft: "20px",
              color: "white",
              textAlign: "start",
            }}
          >
            <Heading as="h6" size="xs" opacity={1}>
              Agarbatti Making Machines
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Disposable Plate Making Machine
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Oil Extraction Machine
            </Heading>{" "}
            <br />
            <Heading as="h6" size="xs">
              Animal Feed Making Machine
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
                src="https://3.imimg.com/data3/WE/MN/MY-2/food-processing-machine-125x125.jpg"
                alt="error"
                marginTop="35px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="0">
                Food Processing Machine
              </Heading>
              <Heading size="xs" mt="2">
                Flour Mill
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Rice Mill Machinery
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Spice Processing Machines
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
                src="https://3.imimg.com/data3/SF/NU/MY-2/high-speed-au…-t-shirt-bag-making-machine-two-line--125x125.jpg"
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
                Bag Making Machine
              </Heading>
              <Heading size="xs" mt="2">
                Non Woven Bag Making Machine
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Paper Bag Making Machine
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Biodegradable Bag Making Machine
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
                src="https://5.imimg.com/data5/NG/VV/GLADMIN-2/nop300-125x125.png"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Snack Machine
              </Heading>
              <Heading size="xs" mt="2">
                Popcorn Machines
              </Heading>
              <Link to="login">
                <Heading as="h6" size="xs" mt="2">
                  Pani Puri Making Machine
                </Heading>
                <Heading as="h6" size="xs" mt="2">
                  Namkeen Making Machines
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
                src="https://3.imimg.com/data3/UK/HT/MY-2/deck-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Bakery & Dairy Machinery
              </Heading>
              <Heading size="xs" mt="2">
                Bakery Machinery
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Bakery Oven
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                Sweets Making Machine
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
                src="https://5.imimg.com/data5/GLADMIN/Default/2022/6/MW/VE/VZ/87939/cnc-lathe-machine-125x125.png"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                CNC Machines & Lathe Machine
              </Heading>
              <Heading size="xs" mt="2">
                Lathe Machine
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                CNC Machines
              </Heading>
              <Heading as="h6" size="xs" mt="2">
                CNC Vertical Machining Centers
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
                src="	https://3.imimg.com/data3/TU/LV/GLADMIN-2070/flexographic-printing-machine-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Printing Machine
              </Heading>
              <Heading size="xs" mt="3">
                Large Format Printers
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Offset Printing Machines
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Sublimation Printing Machine
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
                src="https://3.imimg.com/data3/GF/WP/GLADMIN-45894/industrial-compressor-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Air Compressors
              </Heading>
              <Heading size="xs" mt="3">
                Oil Free Air Compressor
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Reciprocating Compressors
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Refrigeration Compressors
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
                src="https://5.imimg.com/data5/PA/NP/GLADMIN-2/seawaterfiltrationsystem-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Water Purification Plants
              </Heading>
              <Heading size="xs" mt="3">
                Water Softening Systems
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Water Treatment Plants
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Reverse Osmosis Plants
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
                src="	https://3.imimg.com/data3/YN/LI/MY-2/dsc_2766-125x125.jpg"
                alt="error"
                marginTop="30px"
              />
            </div>
            <div style={{ marginTop: "20px", flex: "7", textAlign: "start" }}>
              <Heading as="h6" size="md" mt="1">
                Food Processing Plants
              </Heading>
              <Heading size="xs" mt="3">
                Animal Feed Making Machine
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Sugarcane Juice Machine
              </Heading>
              <Heading as="h6" size="xs" mt="3">
                Wet Grinder
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
