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

const Alerte = () => {
    return (
      <>
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for submitting your application. Our team will get back to you
            soon.
          </AlertDescription>
        </Alert>
      </>
    );
  };
const Footer = () => {
  const initialState = {
    products: "",
    mobile: "",
    fname: "",
    country: "",
  };
  const [state, setState] = React.useState(initialState);
  const handleClick = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setState({ ...state, [name]: value });
  };
  console.log(state);
  const handleSubmit = (e)=>{
    e.preventDefault();
    // Alerte();
alert(`your Product search for ${state.products} Query reaced to us, we will call You Back on ${state.mobile} shortly`)
  }
  const { products, mobile, fname, country } = state;
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <div style={{ flex: "3" }}>
        {/* <img src="" alt="" /> */}
        <img src="https://imagetolink.com/ib/4YwaqS2sDx.jpg" alt="err" />
      </div>
      <div style={{ flex: "6" }}>
        <FormControl
          isRequired
         
        >
          <FormLabel>Products</FormLabel>
          <Input
            placeholder="Enter Products"
            name="products"
            value={products}
            onChange={handleClick}
          />
          <Input
            placeholder="Mobile "
            name="mobile"
            value={mobile}
            onChange={handleClick}
          />

          <FormLabel>Country</FormLabel>
          <Select
            placeholder="Select country"
            value={country}
            name="country"
            onChange={handleClick}
          >
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
            <option>Chad</option>
            <option>Chelusain</option>
            <option>Dwarikhal</option>
            <option>Pauri</option>
            <option>Angola</option>
            <option>Lansdfowne</option>
            <option>Mali</option>
            <option>Java</option>
            <option>Nepal</option>
            <option>Thailand</option>
            <option>Bhutan</option>
            <option>India</option>
            <option>China</option>
            <option>Pakistan</option>
            <option>Afghan</option>
            <option>Kazakastan</option>
            <option>Egypt</option>
            <option>Saudi Arabia</option>
            <option>Zimbawe</option>
          </Select>

          <Input
            placeholder="Name"
            value={fname}
            name="fname"
            onChange={handleClick}
          />
          <Button
            mt={4}
            colorScheme="teal"
            // isLoading={props.isSubmitting}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </div>
      {/* {mid1()} */}
    </div>
  );
};
// rgb(255,255,255)
export default Footer;

