import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Divider, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Mid() {
  return (
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
          alignItems: "end",
        }}
      >
        <div style={{ marginTop: "150px", color: "white", textAlign: "start" }}>
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
          gridTemplateColumns: "repeat(3,3fr)",
        }}
      >
        <div
          style={{
            display: "flex",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            border: "0px solid grey",
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
          <div style={{ marginTop: "20px", flex: "7", textAlign: "start",marginLeft:"5px" }}>
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
  );
}
