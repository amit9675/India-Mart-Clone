import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import {
  Box,
  Flex,
  Text,
  Textarea,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,

} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Login from "../Pages/Login";

export default function NavbarAhead1() {
  const [isAuth, setisAuth] = React.useState(false);
  const handleClick = () => {
    console.log("sdfsdf");
    setisAuth(!isAuth);
  };
  console.log(isAuth);

  return (
    <div
      style={{
        backgroundImage: `url("https://hm.imimg.com/imhome_gifs/bg-img.jpg")`,
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "700px",
      }}
    >
      {/* <img src=""/> */}
      {/* <h1 style={{color:"red"}}>Welcome</h1> */}

      {/* <Textarea bg={"white"} border={"2px solid red"} width={"600px"} color={"red"} height={"300px"} placeholder="ENter Your Mail Here"></Textarea> */}
      <Stack spacing={4} direction="row" align="center">
        {/* 
 {isAuth ? "Suscribed" :   "Start Your Journey With Us"} */}
{/* 
        <Input
          placeholder="search items"
          size="lg"
          backgroundColor={"black"}
          width={"1100px"}
          color={"white"}
        >
      
        </Input> */}
        <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300"/>}
        size="xs"

     
        />
      <Input
        variant="outline"
        size="xs"
        width={"1010px"}
        color="black"
        height="40px"
        backgroundColor="white"
        placeholder={`Search Here`}
      />
          </InputGroup>

        {/* <Search2Icon /> */}
      </Stack>
    </div>
  );
}
