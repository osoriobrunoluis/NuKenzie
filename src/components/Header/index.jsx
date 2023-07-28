import React from "react";
import logo from "../../assets/Nu Kenzie.png";
import { ButtonHome } from "../Buttons";
import "./style.css";

export const Header = ({ setHomePage }) => {
  return (
    <header className="header">
      <nav className="nav">
        <img className="nav__div__img--logo" src={logo} alt="logo"></img>
        <ButtonHome setHomePage={setHomePage} />
      </nav>
    </header>
  );
};
