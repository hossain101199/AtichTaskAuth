import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image404 from "../assets/images/404.png";
import barrier from "../assets/images/barrier.png";
import Container from "../components/atoms/Container";
import Image from "../components/atoms/Image";
import MHeading from "../components/atoms/MHeading";
import PrimaryButton from "../components/atoms/PrimaryButton";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      handleNavigate();
    }, 5000);
  });

  return (
    <Container className="flex flex-col gap-5 items-center min-h-[90vh] justify-between">
      <div className="flex flex-col gap-5 items-center mt-5">
        <Image src={image404} alt="404" className="w-full max-w-lg" />
        <MHeading>Page not found</MHeading>
        <PrimaryButton onClick={() => handleNavigate()} className="px-10 w-fit">
          Back to Home
        </PrimaryButton>
      </div>
      <Image src={barrier} alt="barrier" className="w-full" />
    </Container>
  );
};

export default NotFoundPage;
