import React from "react";
import { translate } from "react-translate";

function ExperienceSection(props) {
	const { t } = props;
	return (
		<section id="experience">
			<h2 className="subtitle">{t("title")}</h2>
			<div className="exp-all">
				<div className="exp-each left firstelement">
					<div className="exp-title">
						<h3>{t("wxp1_position")}</h3>
						<p className="exp-date">{t("wxp1_period")}</p>
					</div>
					<p className="bajada">{t("wxp1_place")}</p>
					<p>{t("wxp1_description")}</p>
				</div>
				<div className="exp-each right">
					<div className="exp-title">
						<h3>{t("wxp2_position")}</h3>
						<p className="exp-date">{t("wxp2_period")}</p>
					</div>
					<p className="bajada">{t("wxp2_place")}</p>
					<p>{t("wxp2_description")}</p>
				</div>
				<div className="exp-each left">
					<div className="exp-title">
						<h3>{t("wxp3_position")}</h3>
						<p className="exp-date">{t("wxp3_period")}</p>
					</div>
					<p className="bajada">{t("wxp3_place")}</p>
					<p>{t("wxp3_description")}</p>
				</div>
				<div className="exp-each right">
					<div className="exp-title">
						<h3>{t("wxp4_position")}</h3>
						<p className="exp-date">{t("wxp4_period")}</p>
					</div>
					<p className="bajada">{t("wxp4_place")}</p>
					<p>{t("wxp4_description")}</p>
				</div>
				<div className="exp-each left">
					<div className="exp-title">
						<h3>{t("wxp5_position")}</h3>
						<p className="exp-date">{t("wxp5_period")}</p>
					</div>
					<p className="bajada">{t("wxp5_place")}</p>
					<p>{t("wxp5_description")}</p>
				</div>
				<div className="exp-each right">
					<div className="exp-title">
						<h3>{t("wxp6_position")}</h3>
						<p className="exp-date">{t("wxp6_period")}</p>
					</div>
					<p className="bajada">{t("wxp6_place")}</p>
					<p>{t("wxp6_description")}</p>
				</div>
			</div>
		</section>
	);
}

export default translate("experience-section")(ExperienceSection);
