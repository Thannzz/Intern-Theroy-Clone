import {
  Box,
  Flex,
  getToastPlacement,
  Heading,
  Image,
  textDecoration,
  Toast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AiFillCloseCircle } from "react-icons/ai";

const Cart = () => {
  var cartItems = JSON.parse(localStorage.getItem("cart"));
  const [total, setTotal] = useState(0);
  const [cgst, setcgst] = useState(0);
  const getTotal = () => {
    {
      cartItems.map((el) => setTotal((prev) => prev + el.Price));
    }
  };
  useEffect(() => {
    getTotal();
  }, []);
  useEffect(() => {
    setcgst((total * 9) / 100);
  }, []);
  console.log(cgst);
  // console.log(total);
  // console.log(cartItems);
  return (
    <>
      <Navbar />
      <Box
        backgroundColor="rgb(248, 248, 248)"
        w="100%"
        h="auto"
        border="1px solid red"
      >
        <Box
          w="70%"
          h="auto"
          m="auto"
          mt="2rem"
          bgColor="white"
          boxShadow="base"
          display="flex"
          mb="2rem"
        >
          <Box w="70%" h="100%" borderRight="1px solid grey">
            <p>Cart</p>
            {cartItems.map((el) => (
              <Box
                borderBottom="1px dashed gray"
                display="flex"
                padding="1.5rem"
              >
                <Box w="80%" h="100%" display="flex">
                  <AiFillCloseCircle size="25px" color="red" />
                  <Image
                    ml="1rem"
                    mt="auto"
                    mb="auto"
                    w="150px"
                    h="50px"
                    src={el.Image}
                  />
                  <Heading ml="1rem" mt="auto" mb="auto" size="sm">
                    {el.Title}
                  </Heading>
                </Box>

                <Box
                  mt="2rem"
                  display="flex"
                  w="20%"
                  h="100%"
                  // border="1px solid blue"
                >
                  <p
                    style={{
                      color: "rgba(0, 0, 0, 0.54)",
                      textDecoration: "line-through",
                      fontSize: "0.75rem",
                      fontWeight: "400",
                      lineHeight: "1.6",
                      paddingTop: "8px",
                      // mr: "1rem",
                    }}
                  >
                    {el.OriginalPrice}
                  </p>
                  <span>
                    <p style={{ paddingLeft: "0.5rem" }}>
                      <b>{el.OfferPrice}</b>
                    </p>
                  </span>
                </Box>
              </Box>
            ))}
          </Box>
          <Box w="30%" padding="2rem" h="100%" border="1px solid red">
            <Flex borderBottom="1px solid grey" justifyContent="space-between">
              <Box>Amount</Box>
              <Box>₹{total}</Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
