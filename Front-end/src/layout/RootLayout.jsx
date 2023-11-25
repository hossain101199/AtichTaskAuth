import Container from "@/components/atoms/Container";
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default RootLayout;
