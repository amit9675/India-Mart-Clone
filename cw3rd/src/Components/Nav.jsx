import { ReactNode } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* <Box>Logo</Box> */}
          <Box>
            <img
              height={"90px"}
              width={"90px"}
              src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/images/Redesign/Header/bass-pro-logo-2x.png"
              alt="not found"
            />
          </Box>
          <Box>
            <Input
              width={{ base: "fit-content", md: "fit-content", lg: "500px" }}
              placeholder="What can we help you find ?"
            />
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <RouterLink to="/Cart">
                <Button>{<FaCartArrowDown />}</Button>
              </RouterLink>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                {!isAuthenticated && (
                  <Button onClick={() => loginWithRedirect()}>
                    {<CgProfile />}
                  </Button>
                )}

                {isAuthenticated && (
                  <div>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Avatar size={"sm"} src={user.picture} />
                    </MenuButton>
                    <MenuList alignItems={"center"}>
                      <br />
                      <Center>
                        <Avatar size={"2xl"} src={user.picture} />
                      </Center>
                      <br />
                      <Center>
                        <p>{user.name}</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem>{user.email}</MenuItem>
                      <MenuItem>Account Settings</MenuItem>
                      <MenuItem
                        onClick={() =>
                          logout({ returnTo: window.location.origin })
                        }
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </div>
                )}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
          
    </>
  );
}
