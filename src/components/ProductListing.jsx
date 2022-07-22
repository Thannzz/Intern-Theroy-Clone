import { Box, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ProductListing = ({ data, name, route }) => {
  // console.log(name, route);

  return (
    <Box
      backgroundColor="rgb(248, 248, 248)"
      width="100%"
      height="auto"
      display="flex"
    >
      <Box
        width="30%"
        height="500px"
        // border="1px solid red"
        display="flex"
        justifyContent="flex-end"
      >
        <Image
          width="300px"
          height="300px"
          padding="10px 10px 10px 10px"
          src="https://assets.interntheory.com/creative/Internship_left_course_add_02.png"
          alt="img"
        />
      </Box>
      <Box
        width="60%"
        margin="10px 10px 10px 10px"
        height="auto"
        // border="1px solid red"
        background="white"
        boxShadow="0px 2px 2px 0px rgb(0 0 0 / 22%)"
      >
        <Heading
          padding="10px 10px 10px 10px"
          textAlign="left"
          as="h5"
          size="md"
          fontWeight="medium"
        >
          {name}
        </Heading>
        {data.map((el) => (
          <Box
            key={el.id}
            width="98%"
            height="auto"
            padding="10px"
            margin="auto"
            // border="1px solid blue"
            borderBottom="2px grey dashed"
            display="flex"
          >
            <Box
              display="flex"
              margin="0"
              width="20%"
              height="100%"
              // border="1px solid red"
              justifyContent="center"
            >
              <Image
                style={{
                  width: "90px",
                  height: "90px",
                  margin: "10x 10px 10px",
                  padding: "2px",
                }}
                src={el.Image}
              />
            </Box>
            <Box width="60%" height="100%">
              <Box textAlign="left">
                <Heading
                  as="h6"
                  size="md"
                  fontWeight="medium"
                  lineHeight="1.6"
                  letterSpacing="0.0075em"
                >
                  {el.Job}
                </Heading>
                <p
                  style={{
                    color: "#3C4858",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                  }}
                >
                  {el.CompanyName}
                </p>
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.54)",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                  }}
                >
                  {el.CourseType}
                </p>
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.54)",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                  }}
                >
                  {el.Roles}
                </p>
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.54)",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                  }}
                >
                  {el.Location}
                </p>
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.54)",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.01071em",
                  }}
                >
                  Stipprnd : {el.Stipend}
                </p>
              </Box>
            </Box>
            <Box
              textAlign="right"
              width="20%"
              height="100%"
              // border="1px solid red"
            >
              <Stack justifyContent="space-between">
                <p>{el.Time}</p>
                <span></span>
                <span
                  style={{
                    color: "#087CDD",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  <Link to={`/${route}/${el.id}`}>
                    {el.Button}
                  </Link>
                </span>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductListing;
