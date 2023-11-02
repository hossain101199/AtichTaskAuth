import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "@/components/atoms/Container";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default RootLayout;
