import React from "react";
import { translate } from "react-translate";

function StudiesSection(props) {
	const { t } = props;
	return (
		<section id="studies">
			<h2 className="subtitle">{t("title")}</h2>
			<div className="exp-all">
				<div className="studies-each left firstelement">
					<div className="exp-title">
						<h3>{t("std1_title")}</h3>
						<p className="exp-date">{t("std1_period")}</p>
					</div>
					<p className="bajada">{t("std1_place")}</p>
				</div>
				<div className="studies-each right">
					<div className="exp-title">
						<h3>{t("std2_title")}</h3>
						<p className="exp-date">{t("std2_period")}</p>
					</div>
					<p className="bajada">{t("std2_place")}</p>
				</div>
				<div className="studies-each left">
					<div className="exp-title">
						<h3>{t("std3_title")}</h3>
						<p className="exp-date">{t("std3_period")}</p>
					</div>
					<p className="bajada">{t("std3_place")}</p>
				</div>
				<div className="studies-each right">
					<div className="exp-title">
						<h3>{t("std4_title")}</h3>
						<p className="exp-date">{t("std4_period")}</p>
					</div>
					<p className="bajada">{t("std4_place")}</p>
				</div>
				<div className="studies-each left">
					<div className="exp-title">
						<h3>{t("std5_title")}</h3>
						<p className="exp-date">{t("std5_period")}</p>
					</div>
					<p className="bajada">{t("std5_place")}</p>
				</div>
			</div>
		</section>
	);
}

export default translate("studies-section")(StudiesSection);
