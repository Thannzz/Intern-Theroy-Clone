import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseLayout } from "../components/CourseLayout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

const CourseDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  const getData = () => {
    axios
      .get(`http://localhost:8080/courses/${params.id}`)
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
//   console.log(data);
  return (
    <>
      <Navbar />
      <CourseLayout data={data} />
      <Footer />
    </>
  );
};

export default CourseDetails;
