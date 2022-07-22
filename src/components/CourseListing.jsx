import { Box, Button, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";

const CourseListing = ({ data }) => {
  // const params = useParams()
  // console.log(data, 1);
  return (
    <Box backgroundColor="rgb(248, 248, 248)" mb="1rem" w="100%" h="auto">
      <Box
        margin="auto"
        mt="2rem"
        w="80%"
        mb="1rem"
        h="auto"
        // border="1px solid red"
      >
        <Heading
          color="rgba(0, 0, 0, 0.54)"
          size="md"
          fontWeight="normal"
          textAlign="left"
          as="h6"
          lineHeight="1.6"
          letterSpacing="normal"
        >
          Certified Online Courses
        </Heading>
        <Heading
          color="rgba(0, 0, 0, 0.54)"
          size="xs"
          fontWeight="normal"
          textAlign="left"
          as="h6"
          lineHeight="1.6"
          letterSpacing="medium "
        >
          Upgrade your skills with Intern Theory's online learning platform.
          Enrol for any certified online courses and get a step ahead of
          competition. Select from a range of skill based online courses and
          kickstart your career.
        </Heading>
      </Box>
      <Box margin="auto" mt="1.5rem" w="80%" h="auto">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {data.map((el) => (
            <>
              <GridItem key={el.id} boxShadow="base">
                <Image w="100%" h="140px" src={el.Image} alt={el.id} />
                <Box
                  borderBottom="1px dashed grey"
                  w="98%"
                  margin="auto"
                  textAlign="left"
                  h="110px"
                  padding="0.5rem"
                >
                  <Heading as="h6" fontWeight="medium" mb="0.35rem" size="sm">
                    {el.Title}
                  </Heading>
                  <p
                    style={{
                      color: "rgba(0, 0, 0, 0.54)",
                      fontSize: "0.875rem",
                    }}
                  >
                    {el.Description}
                  </p>
                </Box>
                <Box display="flex" flexDirection="row-reverse">
                  <Heading pr="1rem" as="h5" marginLeft="10px" fontSize="md">
                    {el.OfferPrice}
                  </Heading>
                  <p
                    style={{
                      color: "rgba(0, 0, 0, 0.54)",
                      lineHeight: "1.5",
                      fontWeight: "400",
                      letterSpacing: "0.01071em",
                      textDecoration: "line-through",
                      fontSize: "0.775rem",
                      marginTop: "5px",
                    }}
                  >
                    {el.OriginalPrice}
                  </p>
                </Box>
                <Box
                  textAlign="right"
                  fontWeight="bold"
                  color="rgb(255, 179, 38)"
                  fontSize="sm"
                  lineHeight="1.5"
                  letterSpacing="0.01071em"
                  paddingRight="1rem"
                >
                  {el.EMI}
                </Box>
                <Box
                  display="flex"
                  width="100%"
                  height="50px"
                  paddingRight="2rem"
                  marginTop="20px"
                  justifyContent="flex-end"

                  // border="1px solid red"
                >
                  <Button
                    style={{ color: "#087CDD" }}
                    colorScheme="blue"
                    variant="ghost"
                    size="sm"
                    margin="0"
                  >
                    <Link to={`/courses/${el.id}`}>{el.Know}</Link>
                    {/* <Link to={}>BACK TO INTERNSHIP</Link> */}
                  </Button>
                  <Button
                    boxShadow="0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);"
                    colorScheme="red"
                    size="sm"
                    verticalAlign="middle"
                    margin="0"
                    marginRight="-20px"
                  >
                    {el.Add}
                  </Button>
                </Box>
              </GridItem>
            </>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CourseListing;
