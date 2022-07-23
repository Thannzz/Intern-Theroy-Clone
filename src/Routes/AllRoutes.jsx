import React from "react";
import { Route, Routes } from "react-router-dom";
import Bussiness from "./Bussiness";
import Cart from "./Cart";
import Content from "./Content";
import CourseDetails from "./CourseDetails";
import Courses from "./Courses";
import Engineering from "./Engineering";
import Finance from "./Finance";
import Graphics from "./Graphics";
import Home from "./Home";
import Human from "./Human";
import Intern from "./Intern";
import { Marketing } from "./Marketing";
import ProductDetails from "./ProductDetails";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bussiness" element={<Bussiness />} />
        <Route path="/content" element={<Content />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/human" element={<Human />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/intern" element={<Intern />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route
          path="/bussiness/:id"
          element={<ProductDetails route={"bussiness"} get={"Business"} />}
        />
        <Route
          path="/marketing/:id"
          element={<ProductDetails route={"marketing"} get={"Marketing"} />}
        />
        <Route
          path="/graphics/:id"
          element={<ProductDetails get={"Graphics"} route={"graphics"} />}
        />
        <Route
          path="/finance/:id"
          element={<ProductDetails route={"finance"} get={"Finance"} />}
        />
        <Route
          path="/human/:id"
          element={<ProductDetails route={"human"} get={"Human"} />}
        />
        <Route
          path="/intern/:id"
          element={<ProductDetails route={"intern"} get={"All"} />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
