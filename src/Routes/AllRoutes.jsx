import React from "react";
import { Route, Routes } from "react-router-dom";
import Bussiness from "./Bussiness";
import Content from "./Content";
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
        <Route
          path="/bussiness/:id"
          element={<ProductDetails get={"Business"} />}
        />
        <Route
          path="/marketing/:id"
          element={<ProductDetails get={"Marketing"} />}
        />
        <Route
          path="/graphics/:id"
          element={<ProductDetails get={"Graphics"} />}
        />
        <Route
          path="/finance/:id"
          element={<ProductDetails get={"Finance"} />}
        />
        <Route
          path="/human/:id"
          element={<ProductDetails get={"Human"} />}
        />
        <Route
          path="/intern/:id"
          element={<ProductDetails get={"All"} />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
