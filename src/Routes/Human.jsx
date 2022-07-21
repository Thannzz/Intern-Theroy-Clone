import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductListing from "../components/ProductListing";
import { getHumanData } from "../Api";

export const Human = () => {
  const [data, setData] = useState([]);

  const handleGetData = () => {
    getHumanData()
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
      <ProductListing route={"human"} name={"HUMAN RESOURCE"} data={data} />
      <Footer />
    </Box>
  );
};

export default Human;
