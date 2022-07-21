import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductListing from "../components/ProductListing";
import { getAllData } from "../Api";

const Intern = () => {
  const [data, setData] = useState([]);

  const handleGetData = () => {
    getAllData()
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
  console.log(data);

  return (
    <Box>
      <Navbar />
      <ProductListing
        route={"intern"}
        name={"BUSINESS DEVELOPMENT"}
        data={data}
      />
      <Footer />
    </Box>
  );
};

export default Intern;
