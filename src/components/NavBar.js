import React from "react";
import * as ArgFlag from '../assets/Argentina_Flag.png';
import * as UKFlag from '../assets/UnitedKindom_Flag.png';
import ArrowNav from '../assets/arrownav.svg';
import { translate } from "react-translate";

function NavBar(props) {
  const { t } = props
  return (
    <nav className="navbar">
      <div class="navbar-container">
        <div className="navbar-logo">
          <a className="logohover" href="#about"><h2 className="logo">Gaston A. Larriera</h2></a>
        </div>
        <ul className="navbar-links">
            <li><a href="#about"><span>{t("about")}</span></a></li> 
            <li><a href="#knowledge"><span>{t("technologies")}</span></a></li> 
            <li><a href="#experience"><span>{t("experience")}</span></a></li> 
            <li><a href="#studies"><span>{t("studies")}</span></a></li> 
            <li><a href="#contact"><span>{t("contact")}</span></a></li> 
            <li className="nav_flag">
              <img src={ArgFlag}></img>
              <img src={ArrowNav} alt="Icono de flecha" className="arrow_download"></img>
            </li>
              {/* <ul>
                  <li><a href="#"><img src={ArgFlag}></img>Español</a></li>
                  <li><a href="#"><img src={ArgFlag}></img>Ingles</a></li>
              </ul>
            </li> */}
        </ul>
      </div>
      <script>
        
      </script>
    </nav>
  );
}

export default translate('navbar')(NavBar)