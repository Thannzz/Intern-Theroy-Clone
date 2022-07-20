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
      </Routes>
    </>
  );
};

export default AllRoutes;
