import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CourseLayout = ({ data }) => {
  //   console.log(data);

  const handleAddtoCart = (data) => {
    var cartItem = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartItem.length === 0) {
      cartItem.push(data);
      localStorage.setItem("cart", JSON.stringify(cartItem));
    } else {
      let count = 0;
      for (let i = 0; i < cartItem.length; i++) {
        if (cartItem[i].Title === data.Title) {
          count++;
          return;
        }
      }
      if (count === 0) {
        cartItem.push(data);
        localStorage.setItem("cart", JSON.stringify(cartItem));
      }
    }
  };
  return (
    <>
      <Image
        width="100%"
        h="23em"
        objectFit="cover"
        justifyContent="left"
        boxSizing="inherit"
        // display="block"
        src={data.Image}
      />
      <Box display="flex" backgroundColor="rgb(248, 248, 248)">
        <Box ml="10%" width="60%" h="auto" mb="2rem">
          <Box
            borderTop="1px solid lightgrey"
            textAlign="left"
            width="100%"
            mt="1rem"
            height="170px"
            //   border="1px solid red"
            padding="2rem"
            boxShadow="base"
          >
            <Heading fontSize="3xl" fontWeight="medium">
              {data.Title}
            </Heading>
            <p
              style={{
                color: "#3C4858",
                lineHeight: "1.5",
                fontWeight: "normal",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
                margin: "20px 0 40px 0",
              }}
            >
              Learn the most demanded skills in the IT industry today. Sign up
              for Web Development, Android App Development, R Programming and
              Data Analytics. A complete IT package to kickstart your career.
            </p>
          </Box>
          <Box
            w="100%"
            borderTop="1px solid lightgrey"
            mt="1rem"
            h="auto"
            pb="3rem"
            boxShadow="base"
          >
            <Flex
              mt="3rem"
              ml="3rem"
              width="100%"
              h="40px"
              paddingLeft="1rem"
              //   border="1px solid red"
              borderLeft="5px solid orange"
            >
              <p style={{ fontSize: "24px", fontWeight: "normal" }}>
                Key Featutes
              </p>
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                ml="3rem"
                display="flex"
                width="80%"
                h="auto"
                // border="1px solid red"
              >
                <Image
                  w="70px"
                  h="70px"
                  src="https://assets.interntheory.com/creative/features_icon/certified.png"
                  alt="img"
                />
                <p
                  style={{
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                    color: "#3C4858",
                    margin: "1.5rem 0 0 1rem",
                  }}
                >
                  <b>Certified</b>
                </p>
              </GridItem>
              <GridItem
                ml="3rem"
                display="flex"
                width="80%"
                h="auto"
                // border="1px solid red"
              >
                <Image
                  w="70px"
                  h="70px"
                  src="https://assets.interntheory.com/creative/features_icon/study-at-your-own-time.png"
                  alt="img"
                />
                <p
                  style={{
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                    color: "#3C4858",
                    margin: "1.5rem 0 0 1rem",
                  }}
                >
                  <b>Study At Your Own Time</b>
                </p>
              </GridItem>
              <GridItem
                ml="3rem"
                display="flex"
                width="80%"
                h="auto"
                // border="1px solid red"
              >
                <Image
                  w="70px"
                  h="70px"
                  src="https://assets.interntheory.com/creative/features_icon/learn-from-professional.png"
                  alt="img"
                />
                <p
                  style={{
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                    color: "#3C4858",
                    margin: "1.5rem 0 0 1rem",
                  }}
                >
                  <b>Learn from Industry Professionals</b>
                </p>
              </GridItem>
              <GridItem
                ml="3rem"
                display="flex"
                width="80%"
                h="auto"
                // border="1px solid red"
              >
                <Image
                  w="70px"
                  h="70px"
                  src="https://assets.interntheory.com/creative/features_icon/study-more.png"
                  alt="img"
                />
                <p
                  style={{
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                    color: "#3C4858",
                    margin: "1.5rem 0 0 1rem",
                  }}
                >
                  <b>More Practice, Less Theory</b>
                </p>
              </GridItem>
            </Grid>
            <Flex
              mt="3rem"
              ml="3rem"
              width="100%"
              h="40px"
              paddingLeft="1rem"
              //   border="1px solid red"
              borderLeft="5px solid orange"
            >
              <p style={{ fontSize: "24px", fontWeight: "normal" }}>
                What will a student get after the course?
              </p>
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                ml="3rem"
                display="flex"
                width="80%"
                h="auto"
                // border="1px solid red"
              >
                <Image
                  w="70px"
                  h="70px"
                  src="https://assets.interntheory.com/creative/features_icon/certificate-to-upgrade.png"
                  alt="img"
                />
                <p
                  style={{
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                    color: "#3C4858",
                    margin: "1.5rem 0 0 1rem",
                  }}
                >
                  <b>4 Certificates to upgrade your resume</b>
                </p>
              </GridItem>
              <GridItem
                ml="3rem"
                display="flex"
                width="80%"
                h="auto"
                // border="1px solid red"
              >
                <Image
                  w="70px"
                  h="70px"
                  src="https://assets.interntheory.com/creative/features_icon/internships.png"
                  alt="img"
                />
                <p
                  style={{
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                    color: "#3C4858",
                    margin: "1.5rem 0 0 1rem",
                  }}
                >
                  <b>Internship Assistance</b>
                </p>
              </GridItem>
            </Grid>
          </Box>
        </Box>

        <Box
          mt="1rem"
          borderTop="1px solid lightgrey"
          ml="1rem"
          width="20%"
          padding="1rem"
          h="50%"
          boxShadow="base"
          textAlign="left"
          //   border="1px solid blue"
        >
          <Flex h="40px" borderBottom="1px dashed grey">
            <p>
              Duration <b>4-6 Weeks</b>
            </p>
          </Flex>
          <Flex>
            <Heading mt="1rem" fontWeight="bold" color="rgb(223, 30, 46)">
              {data.OfferPrice}
            </Heading>
            <span>
              <p
                style={{
                  margin: "35px 0 0 10px",
                  textDecoration: "line-through",
                  color: "rgba(0, 0, 0, 0.54)",
                  textDecorationColor: "rgba(0, 0, 0, 0.54)",
                }}
              >
                {data.OriginalPrice}
              </p>
            </span>
          </Flex>
          <Button
            boxShadow="0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);"
            colorScheme="red"
            size="md"
            verticalAlign="middle"
            mt="1rem"
            w="80%"
            ml="10%"
            mb="10%"
            onClick={() => handleAddtoCart(data)}
          >
            
            <Link to="/cart">ADD TO CART</Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};
