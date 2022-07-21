import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductListing from "../components/ProductListing";
import { getBusinessData } from "../Api";

export const Bussiness = () => {
  const [data, setData] = useState([]);

  const handleGetData = () => {
    getBusinessData()
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
      <ProductListing route={"bussiness"} name={"BUSINESS DEVELOPMENT"} data={data} />
      <Footer />
    </Box>
  );
};
export default Bussiness
