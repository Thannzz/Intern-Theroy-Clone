import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DescriptionLayout from "../components/DescriptionLayout";

const ProductDetails = ({ get }) => {
//   console.log(get);
  const [data, setData] = useState([]);
  const params = useParams();
  const getData = () => {
    axios
      .get(`http://localhost:8080/${get}/${params.id}`)
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
      <DescriptionLayout data={data} />
      <Footer />
    </>
  );
};

export default ProductDetails;
