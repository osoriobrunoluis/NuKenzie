import React from "react";
import Logo from "../../assets/logoMobile.png";
import Illustration from "../../assets/ilustrationMobile.png";
import { ButtonHomePage } from "../../components/Buttons";
import "./style.css";

export const HomePage = ({ setHomePage }) => {
  return (
    <main className="main__HomePage">
      <div>
        <section className="main__section--elements">
          <img src={Logo} alt="logo" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <ButtonHomePage setHomePage={setHomePage}/>
        </section>
        <section className="section__img">
          <img src={Illustration} alt="Illustration Home" />
        </section>
      </div>
    </main>
  );
};
