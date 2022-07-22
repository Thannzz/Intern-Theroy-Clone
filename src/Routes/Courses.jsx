import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Image } from "@chakra-ui/react";
import CourseListing from "../components/CourseListing";
import { getCourses } from "../Api";
const Courses = () => {
  const [data, setData] = useState([]);

  const handleGetData = () => {
    getCourses()
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleGetData();
  }, []);
  //   console.log(data);
  return (
    <>
      <Navbar />
      <Box
        width="100%"
        height="auto"
        background="url(https://assets.interntheory.com/creative/courses/listpage/Course-bannerbg.jpg)"
      >
        <Image
          width="80%"
          height="auto"
          margin="auto"
          src="https://assets.interntheory.com/creative/courses/listpage/Course-banner1.png"
        />
      </Box>
      <CourseListing data={data} />
      <Footer />
    </>
  );
};

export default Courses;
