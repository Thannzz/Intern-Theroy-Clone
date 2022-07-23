import React from "react";
import Adv from "../components/Adv";
import { Details } from "../components/Details";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Search from "../components/Search";

if (localStorage.getItem("cart") === null) {
  localStorage.setItem("cart", JSON.stringify([]));
}
const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Details />
      <Product />
      <Adv />
      <ImageSlider />
      <Footer />
    </div>
  );
};

export default Home;
