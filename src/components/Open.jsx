import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { HiPhone } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoBag } from "react-icons/io5";
import {
  MdLogout,
  MdBook,
  MdDashboard,
  MdPerson,
  MdFormatAlignJustify,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Open = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        width="45px"
        height="45px"
        borderRadius="50%"
        colorScheme="gray"
        bg="white"
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image
              style={{ marginLeft: "25px", width: "80px", height: "45px" }}
              src="https://assets.interntheory.com/creative/logo.png"
              alt="home"
            />
          </DrawerHeader>

          <DrawerBody>
            <HStack
              _hover={{ backgroundColor: "lightgray" }}
              padding="1rem"
              // border="1px solid red"
              fontWeight="bold"
            >
              <Icon w="6" h="6" mr="1rem" as={MdDashboard} /> <p>Dashboard</p>
            </HStack>
            <HStack
              _hover={{ backgroundColor: "lightgray" }}
              padding="1rem"
              // border="1px solid red"
              fontWeight="bold"
            >
              <Icon w="6" h="6" mr="1rem" as={MdPerson} /> <p>Profile</p>
            </HStack>
            <HStack
              _hover={{ backgroundColor: "lightgray" }}
              padding="1rem"
              // border="1px solid red"
              fontWeight="bold"
            >
              <Icon w="6" h="6" mr="1rem" as={MdFormatAlignJustify} />{" "}
              <Link to="/intern">
                <p>Internship</p>
              </Link>
            </HStack>
            <HStack
              _hover={{ backgroundColor: "lightgray" }}
              padding="1rem"
              // border="1px solid red"
              fontWeight="bold"
            >
              <Icon w="6" h="6" mr="1rem" as={IoBag} /> <p>Jobs</p>
            </HStack>
            <HStack
              _hover={{ backgroundColor: "lightgray" }}
              padding="1rem"
              // border="1px solid red"
              fontWeight="bold"
            >
              <Icon w="6" h="6" mr="1rem" as={MdBook} />
              <Link to="/courses"
              >
                <p>Courses</p>
              </Link>
            </HStack>
            <HStack
              _hover={{ backgroundColor: "lightgray" }}
              padding="1rem"
              // border="1px solid red"
              fontWeight="bold"
            >
              <Icon w="6" h="6" mr="1rem" as={BsCurrencyDollar} />{" "}
              <p>Transition</p>
            </HStack>
            <HStack
              _hover={{ backgroundColor: "lightgray" }}
              padding="1rem"
              // border="1px solid red"
              fontWeight="bold"
            >
              <Icon w="6" h="6" mr="1rem" as={HiPhone} /> <p>Contact Us</p>
            </HStack>
            <hr />
            <HStack
              _hover={{ backgroundColor: "lightgray" }}
              padding="1rem"
              // border="1px solid red"
              fontWeight="bold"
            >
              <Icon w="6" h="6" mr="1rem" as={MdLogout} /> <p>Logout</p>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Open;
