import { Link } from "react-router-dom";
import AitchTaskLogo from "../assets/svgs/AitchTaskLogo";
import Container from "../components/atoms/Container";
import LParagraph from "../components/atoms/LParagraph";
import Paragraph from "../components/atoms/Paragraph";
import SParagraph from "../components/atoms/SParagraph";
import { developerInfo } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-ghostwhite">
      <Container className="pt-6 pb-6 grid grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-4">
          <LParagraph className="font-semibold uppercase">Developer</LParagraph>
          <Paragraph>{developerInfo.name}</Paragraph>
          <Link
            to={developerInfo.email.contactURL}
            target="_blank"
            className="w-fit h-fit"
          >
            <Paragraph>{developerInfo.email.urlTitle}</Paragraph>
          </Link>
          <Paragraph>{developerInfo.phone}</Paragraph>
        </div>

        <div className="flex flex-col gap-4">
          <LParagraph className="font-semibold uppercase">Social</LParagraph>
          <div className="flex gap-4">
            {developerInfo?.socialContacts?.map((social) => (
              <Link
                key={social.id}
                to={social.contactURL}
                target="_blank"
                className="w-fit h-fit"
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>

        <AitchTaskLogo className="col-span-2 md:col-span-1 w-full md:max-w-xs h-fit rounded-lg" />
      </Container>
      <SParagraph className="text-center font-normal pt-6 pb-6 border-t border-mercury">
        Copyright © 2023 - All right reserved by Mohammad Hossain
      </SParagraph>
    </footer>
  );
};

export default Footer;
