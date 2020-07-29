import React from "react";
import * as ArgFlag from '../assets/Argentina_Flag.png';
import * as UKFlag from '../assets/UnitedKindom_Flag.png';
import { translate } from "react-translate";

function NavBar(props) {
  const { t } = props
  return (
    <nav className="navbar-container">
      <div className="navbar-name">
        <h2 className="main-name">GASTON A. LARRIERA</h2>
      </div>
      <ul className="navbar-links">
          <li><a href="#home"><span>{t("about")}</span></a></li> 
          <li><a href="#knowledge"><span>{t("technologies")}</span></a></li> 
          <li><a href="#experience"><span>{t("experience")}</span></a></li> 
          <li><a href="#studies"><span>{t("studies")}</span></a></li> 
          <li><a href="#contact"><span>{t("contact")}</span></a></li> 
          <li><img src={ArgFlag}></img></li>
            {/* <ul>
                <li><a href="#"><img src={ArgFlag}></img>Español</a></li>
                <li><a href="#"><img src={ArgFlag}></img>Ingles</a></li>
            </ul>
          </li> */}
      </ul>
    </nav>
  );
}

export default translate('navbar')(NavBar)