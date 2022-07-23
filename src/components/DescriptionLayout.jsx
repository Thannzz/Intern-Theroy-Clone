import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useToast } from "@chakra-ui/react";

const DescriptionLayout = ({ data }) => {
  // console.log(data);
  const toast = useToast();
  const handleApply = () => {
    toast({
      title: `Sucess`,
      description: "Your Apllication is sucessfully submitted",
      status: "info",
      position: "top",
      duration: 5000,
      isClosable: true,
    });
  };

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
          src="https://assets.interntheory.com/creative/Internship_left_course_add_01.png"
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
        <Box
          width="98%"
          margin="auto"
          paddding="2%"
          height="auto"
          // border="1px solid blue"
          borderBottom="2px grey dashed"
          display="flex"
        >
          <Box width="20%" height="100%">
            <Image
              margin="auto"
              padding="10px"
              width="100px"
              height="100px"
              marginTop="35px"
              src={data.Image}
            />
          </Box>
          <Box
            textAlign="left"
            width="60%"
            height="100%"
            // border="1px solid green"
          >
            <Heading
              marginLeft="10px"
              marginTop="30px"
              size="md"
              as="h6"
              fontWeight="normal"
              lineHeight="1.6"
              letterSpacing="0.0075em"
              color="#3C4858"
              textTranform="capitalize"
            >
              {data.Job}
            </Heading>
            <p
              style={{
                color: "#3C4858",
                fontWeight: "400",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
                marginLeft: "10px",
              }}
            >
              {data.CompanyName}
            </p>
            <p
              style={{
                color: "#3C4858",
                fontWeight: "400",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
                marginLeft: "10px",
              }}
            >
              {data.CourseType}
            </p>
            <p
              style={{
                color: "#3C4858",
                fontWeight: "400",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
            >
              Internship Category : {data.Job}
            </p>
          </Box>
        </Box>
        <Box
          textAlign="left"
          padding="10px"
          width="100%"
          height="auto"
          // border="1px solid red"
        >
          <Box borderBottom="2px grey dashed" padding="2rem">
            <p
              style={{
                color: "#3C4858",
                // fontWeight: "400",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
              }}
            >
              Openings: <b>1</b>
            </p>
            <p
              style={{
                color: "#3C4858",
                // fontWeight: "400",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
              }}
            >
              Duration: <b>2 months </b>
            </p>
            <p
              style={{
                color: "#3C4858",
                // fontWeight: "400",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
              }}
            >
              Start Date: <b>20th Jul 2022 </b>
            </p>
            <p
              style={{
                color: "#3C4858",
                // fontWeight: "400",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
              }}
            >
              Application Deadline: <b>19th Aug 2022 </b>
            </p>
            <p
              style={{
                color: "#3C4858",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
              }}
            >
              Stipend: <b>Expenses Covered </b>
            </p>
            <p
              style={{
                color: "#3C4858",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
                margin: "20px 0 20px 0",
              }}
            >
              <b>Internship Description:</b>
            </p>
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
              The Digital Marketing Intern is responsible for assisting the
              Digital Marketing Manager in implementing BOHECO’s overall
              communications and marketing plan -- focusing specifically on
              digital marketing and updating website content -- to build
              awareness about BOHECO within the community, and to increase
              sales.
            </p>
            <p
              style={{
                color: "#3C4858",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
                margin: "20px 0 20px 0",
              }}
            >
              <b>Responsibilities:</b>
            </p>
            <ul>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Assist mentors in creating marketing funnels and monitoring
                client campaigns.
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Follow-up and improvement of SEO.
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Assist mentors in creating marketing funnels and monitoring
                client campaigns.
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Assist with website copywriting, proofing, and updating as
                needed
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Work with our design team and vendors to produce high-quality
                content for our website and social media channels
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Learn & manage backend dashboards of e-commerce platforms like
                Shopify etc.
              </li>
            </ul>
            <p
              style={{
                color: "#3C4858",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
                margin: "20px 0 20px 0",
              }}
            >
              <b>Qualifications and skills:</b>
            </p>
            <ul>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Current enrollment in a bachelor’s or master’s course for
                marketing, communications, or in a similar field.
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Excellent knowledge of MS Office
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Excellent writing, editing, and proofreading skills
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Understands and can utilize emerging platforms, digital media,
                and web/social media management and measurement tools
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Adobe Creative Suite experience a plus
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Proficiency in Google Analytics, Google Ads, Search Console,
                etc.
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                WordPress basics are very important
              </li>
              <li
                style={{
                  marginLeft: "50px",
                  color: "#3C4858",
                  lineHeight: "1.5",
                  letterSpacing: "0.01071em",
                  fontSize: "0.875rem",
                }}
              >
                Strong grasp of the English language
              </li>
            </ul>
          </Box>
          <Box padding="2rem">
            <p
              style={{
                color: "#3C4858",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
                margin: "20px 0 20px 0",
              }}
            >
              <b>Company Description:</b>
            </p>
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
              We, Bombay Hemp Company, incorporated in 2013, are an Agro-based
              enterprise reimagining the future of Indian agriculture and
              sustainable living with hemp as our lens. Hemp’s uses are
              kaleidoscopic. Pull its Fibre out and it’ll give you Yarn; chop it
              into Softwood, it’ll give you material to build Shelter; study its
              Genetics, and you’ll find Medicine.
            </p>
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
              Our design fuses this very potential with the existing industries
              of Agriculture, Technology, and Medicine, to bring together
              Community, Impact, and Value.
            </p>
            <p
              style={{
                color: "#3C4858",
                lineHeight: "1.5",
                letterSpacing: "0.01071em",
                fontSize: "0.875rem",
                margin: "20px 0 20px 0",
              }}
            >
              <b>Location</b>
            </p>
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
              Bombay Hemp Company Pvt. Ltd. (BOHECO), Unit #2, Cama Industrial
              Estate, SunMill Compound Rd, Lower Parel, Mumbai – 400013,
              Maharashtra, India., mumbai, 400013.
            </p>
          </Box>
          <Box display="flex" width="100%" height="50px">
            <Button
              boxShadow="0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);"
              colorScheme="red"
              size="md"
              verticalAlign="middle"
              onClick={handleApply}
            >
              APPLY
            </Button>
            <Button
              style={{ color: "#087CDD" }}
              colorScheme="blue"
              variant="ghost"
              size="md"
              margin="0"
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DescriptionLayout;
