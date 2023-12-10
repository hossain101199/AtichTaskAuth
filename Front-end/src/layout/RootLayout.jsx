import Container from "../components/atoms/Container";
import Footer from "./Footer";
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default RootLayout;
