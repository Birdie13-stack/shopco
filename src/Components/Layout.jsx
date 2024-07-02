import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
