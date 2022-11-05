import React from "react";
import * as ArgFlag from "../assets/Argentina_Flag.png";
import * as UKFlag from "../assets/UnitedKindom_Flag.png";
import ArrowNav from "../assets/arrownav.svg";
import MenuIcon from "../assets/menu_icon.svg";
import { translate } from "react-translate";

function NavBar(props) {
	const { t } = props;
	return (
		<nav className="navbar">
			<div class="navbar-container">
				<div className="navbar-logo">
					<a className="logohover" href="#about">
						<h2 className="logo">Gaston A. Larriera</h2>
					</a>
				</div>
				<button id="boton_menu" class="boton_menu">
					<img src={MenuIcon} className="menuicon" />
				</button>
				<ul className="navbar-links" id="navbar-links">
					<li>
						<a href="#about">
							<span>{t("about")}</span>
						</a>
					</li>
					<li>
						<a href="#knowledge">
							<span>{t("technologies")}</span>
						</a>
					</li>
					<li>
						<a href="#experience">
							<span>{t("experience")}</span>
						</a>
					</li>
					<li>
						<a href="#studies">
							<span>{t("studies")}</span>
						</a>
					</li>
					<li>
						<a href="#contact">
							<span>{t("contact")}</span>
						</a>
					</li>
					<li className="nav_flag">
						<img src={ArgFlag}></img>
						<img
							src={ArrowNav}
							alt="Icono de flecha"
							className="arrow_download"
						></img>
						<ul class="dropdown">
							<li>
								<a href="#" className="dropdown_flag">
									<img src={ArgFlag} className="dropdown_flag_img"></img>{" "}
									<p>{t("spanish")}</p>
								</a>
							</li>
							<li>
								<a href="#" className="dropdown_flag">
									<img src={UKFlag} className="dropdown_flag_img"></img>{" "}
									<p>{t("english")}</p>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<script></script>
		</nav>
	);
}

export default translate("navbar")(NavBar);
