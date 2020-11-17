import React from "react";
import "./index.css";
//components
import Logo from "../Logo/index";
import Menu from "../Menu/index";

function Header() {
  return (
    <div className="menuSuperior">
      <Logo />
      <Menu />
    </div>
  );
}
export default Header;
