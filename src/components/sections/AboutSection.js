import React from "react";
import * as profile from "../../assets/foto_gaston.png";
import { translate } from "react-translate";

function AboutSection(props) {
	const { t } = props;
	const navigateToContactSection = () => {
		window.location = "#contact";
	};

	return (
		<section id="home">
			<div className="main-about">
				<h1>Gaston A. Larriera</h1>
				<h2 className="subtitle">{t("subtitle")}</h2>
				<p className="description">{t("description1")}</p>
				<br />
				<p className="description">{t("description2")}</p>
				<br />
				<p className="description">{t("description3")}</p>
				<br />
				<button
					type="button"
					onClick={() => navigateToContactSection()}
					className="botonCv"
				>
					{t("make_contact")}
				</button>
			</div>
			<div className="image">
				<img src={profile} alt="guy"></img>
			</div>
		</section>
	);
}

export default translate("about-section")(AboutSection);
