import { IconButton } from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { css } from "@emotion/react";
import "./homepage.css";

const SocialMediaLink = () => {
  return (
    <>
      <div className="fb-wrapper">
        <IconButton
          aria-label="Facebook icon"
          fontSize="20px"
          icon={<AiFillFacebook />}
        />
      </div>
      <div className="github-wrapper">
        <IconButton
          aria-label="Github icon"
          fontSize="20px"
          icon={<DiGithubBadge />}
        />
      </div>
      <div className="ig-wrapper">
        <IconButton
          aria-label="Instagram Icon"
          fontSize="20px"
          icon={<AiOutlineInstagram />}
        />
      </div>
      <div className="gmail-wrapper">
        <IconButton
          aria-label="G-mail Icon"
          fontSize="20px"
          icon={<BiLogoGmail />}
        />
      </div>
    </>
  );
};

export default SocialMediaLink;
