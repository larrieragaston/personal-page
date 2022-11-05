import React from "react";
import Arrow from "../../assets/arrow.svg";
import * as profile from "../../assets/foto_gaston.png";
import { translate } from "react-translate";

function AboutSection(props) {
	const { t } = props;
	return (
		<section id="home">
			<div className="main-about">
				<h1>Gaston A. Larrierra</h1>
				<h2 className="subtitle">{t("subtitle")}</h2>
				<p className="description">{t("description")}</p>
				<button type="button" href="#contact" className="botonCv">
					{t("button")}
					<img
						src={Arrow}
						alt="Icono de flecha"
						className="arrow_download"
					></img>
				</button>
			</div>
			<div className="image">
				<img src={profile} alt="Photo dev guy"></img>
			</div>
		</section>
	);
}

export default translate("about-section")(AboutSection);
