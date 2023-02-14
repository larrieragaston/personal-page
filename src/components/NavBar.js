import React, { useContext } from "react";
import * as ArgFlag from "../assets/Argentina_Flag.png";
import * as UKFlag from "../assets/UnitedKindom_Flag.png";
import ArrowNav from "../assets/arrownav.svg";
import MenuIcon from "../assets/menu_icon.svg";
import { translate } from "react-translate";
import { LanguageContext } from "../context/langagueContext";

function NavBar(props) {
	const { t } = props;
	const { setLanguage } = useContext(LanguageContext);
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-logo">
					<a className="logohover" href="#about">
						<h2 className="logo">Gaston A. Larriera</h2>
					</a>
				</div>
				<button id="boton_menu" className="boton_menu">
					<img src={MenuIcon} alt="menu" className="menuicon" />
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
					{/* <li>
						<a href="#projects">
							<span>{t("projects")}</span>
						</a>
					</li> */}
					<li>
						<a href="#studies">
							<span>{t("studies")}</span>
						</a>
					</li>
					<li>
						<a href="#courses">
							<span>{t("courses")}</span>
						</a>
					</li>
					<li>
						<a href="#contact">
							<span>{t("contact")}</span>
						</a>
					</li>
					<li className="nav_flag">
						<img src={ArgFlag} alt="flag"></img>
						<img src={ArrowNav} alt="flecha" className="arrow_download"></img>
						<ul className="dropdown">
							<li>
								<a
									// href="#"
									className="dropdown_flag"
									onClick={() => {
										setLanguage("es");
									}}
								>
									<img
										src={ArgFlag}
										alt="flag"
										className="dropdown_flag_img"
									></img>{" "}
									<p>{t("spanish")}</p>
								</a>
							</li>
							<li>
								<a
									// href="#"
									className="dropdown_flag"
									onClick={() => {
										setLanguage("en");
									}}
								>
									<img
										src={UKFlag}
										alt="flag"
										className="dropdown_flag_img"
									></img>{" "}
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
