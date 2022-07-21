import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductListing from "../components/ProductListing";
import { getFinanceData } from "../Api";

export const Finance = () => {
  const [data, setData] = useState([]);

  const handleGetData = () => {
    getFinanceData()
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
      <ProductListing route={"finance"} name={"FINANCE"} data={data} />
      <Footer />
    </Box>
  );
};

export default Finance;
