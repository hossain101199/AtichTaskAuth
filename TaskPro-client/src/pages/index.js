import Container from "@/components/atoms/Container";
import MHeading from "@/components/atoms/MHeading";
import Banner from "@/components/molecules/Banner";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Banner />
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      <Container>{page}</Container>
    </>
  );
};

export default HomePage;
