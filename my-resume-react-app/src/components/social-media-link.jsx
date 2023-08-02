import { IconButton } from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai"
import { BiLogoGmail } from "react-icons/bi";





const SocialMediaLink = () => {
  return (
    <>
      <div className="fb-wrapper">
      <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<AiFillFacebook />}
        />
      </div>
      <div className="github-wrapper">
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<DiGithubBadge />}
        />
      </div>
      <div className="ig-wrapper">
      <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<AiOutlineInstagram />}
        />
      </div>
      <div className="gmail-wrapper">
      <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<BiLogoGmail />}
        />
      </div>
    </>
  );
};

export default SocialMediaLink
