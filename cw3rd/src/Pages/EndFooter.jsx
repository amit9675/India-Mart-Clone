import { Heading, Image, Input, Button } from "@chakra-ui/react";
import React from "react";

const EndFooter = () => {
  const [number, setNumber] = React.useState("");
  return (
    <div
      style={{
        display: "flex",
        // border: "2px solid",
        width: "85%",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <div style={{ flex: 3 }}>
        <Image src="https://hm.imimg.com/imhome_gifs/app-img.png" />
      </div>
      <div
        style={{
          flex: 6,
          //   border: "2px solid pink",
          marginTop: "200px",
          textAlign: "start",
        }}
      >
        <Heading>Get IndiaMART App</Heading>
        <h2>
          Search for products/services and connect with verified sellers on the
          go!
        </h2>
        <Input
          type="number"
          placeholder="Enter Your contact and we send the link"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <Button onClick={() => alert(`Link has been sent to ${number}`)}>
          Get Link
        </Button>
        <a href="https://apps.apple.com/us/app/indiamart-buy-sell-products/id668561641">
          <Button color="teal" backgroundColor="black">Get It On Play Store</Button>
        </a>
      </div>
    </div>
  );
};

export default EndFooter;
