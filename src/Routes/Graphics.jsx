import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductListing from "../components/ProductListing";
import { getGraphicsData } from "../Api";

export const Graphics = () => {
  const [data, setData] = useState([]);

  const handleGetData = () => {
    getGraphicsData()
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
      <ProductListing route={"graphics"} name={"GRAPHICS DESIGN"} data={data} />
      <Footer />
    </Box>
  );
};

export default Graphics;
