import React from "react";
import "./footer.css";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <div className="my-email-wrapper">
        <div className="email-footer-icon">
          <img src="src\image\Squircle.png" alt="email contact icon" />
        </div>
        <div className="my-email-footer">
        <h3 className="my-email-text">jaraweekorn01@gmail.com</h3>
        </div>
      </div>
      <div className="copyright-wrapper">
        <h3 className="copyright-text">© Copyright 2021 | mmrz315</h3>
      </div>
      <div className="request-button">
        <Button colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button colorScheme="teal" variant="outline">
          Call us
        </Button>
      </div>
    </>
  );
}

export default Footer;
