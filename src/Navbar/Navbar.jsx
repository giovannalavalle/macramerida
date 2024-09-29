import React from "react";
import { Icon, Button } from "semantic-ui-react";
import macrameLogoImage from "../Media/NewLogo.jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Navbar-Container">
        <div className="Navbar-Menu">
          <Button>
            <Icon name="bars" />
          </Button>
        </div>
        <div>
          <img
            className="Navbar-Logo"
            src={macrameLogoImage}
            alt="MacrameLogo"
          />
        </div>
        <div className="Navbar-Shopping-Cart">
          <Button>
            <Icon name="shop" />
          </Button>
        </div>
      </div>
    </>
  );
}
