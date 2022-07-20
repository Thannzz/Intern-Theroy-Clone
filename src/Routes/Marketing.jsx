import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductListing from "../components/ProductListing";
import { getMarketingData } from "../Api";

export const Marketing = () => {
  const [data, setData] = useState([]);

  const handleGetData = () => {
    getMarketingData()
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
      <ProductListing name={"MARKETING INTERNSHIP"} data={data} />
      <Footer />
    </Box>
  );
};
