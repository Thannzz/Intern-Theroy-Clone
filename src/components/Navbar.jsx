import React from "react";
import Open from "./Open";
import { Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "50px",
        // border: "1px solid red",
        justifyContent: "space-between",
        // position: "fixed",
        // zIndex: 999,
        // backgroundColor: "white",
      }}
    >
      <Box display="flex">
        <Open />
        <Link to="/">
          <Image
            style={{ marginLeft: "25px", width: "80px", height: "45px" }}
            src="https://assets.interntheory.com/creative/logo.png"
            alt="home"
          />
        </Link>
      </Box>
      <Box>
        <Icon
          width="25px"
          height="25px"
          margin="10px 20px 0px "
          as={BsFillCartFill}
        />
        <Button
          size="sm"
          margin="-10px 20px 0px 10px"
          colorScheme="red"
          variant="solid"
        >
          SIGN IN
        </Button>
      </Box>
    </div>
  );
};

export default Navbar;
