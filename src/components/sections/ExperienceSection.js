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
						<h3>UTN INSPT</h3>
						<p className="exp-date">Agosto 2019 a la Actualidad</p>
					</div>
					<p className="bajada">
						Docente de materia Programación III (terciario)
					</p>
					<p>
						Diseño, desarrollo e implementación de sistemas con orientación web.
						Análisis y implementación de nuevas funcionalidades. Mantenimiento
						de aplicaciones existentes. Corrección de errores.
					</p>
				</div>
				<div className="exp-each right">
					<div className="exp-title">
						<h3>UTN INSPT</h3>
						<p className="exp-date">Agosto 2019 a la Actualidad</p>
					</div>
					<p className="bajada">
						Docente de materia Programación III (terciario)
					</p>
					<p>
						Diseño, desarrollo e implementación de sistemas con orientación web.
						Análisis y implementación de nuevas funcionalidades. Mantenimiento
						de aplicaciones existentes. Corrección de errores.
					</p>
				</div>
				<div className="exp-each left">
					<div className="exp-title">
						<h3>UTN INSPT</h3>
						<p className="exp-date">Agosto 2019 a la Actualidad</p>
					</div>
					<p className="bajada">
						Docente de materia Programación III (terciario)
					</p>
					<p>
						Diseño, desarrollo e implementación de sistemas con orientación web.
						Análisis y implementación de nuevas funcionalidades. Mantenimiento
						de aplicaciones existentes. Corrección de errores.
					</p>
				</div>
				<div className="exp-each right">
					<div className="exp-title">
						<h3>UTN INSPT</h3>
						<p className="exp-date">Agosto 2019 a la Actualidad</p>
					</div>
					<p className="bajada">
						Docente de materia Programación III (terciario)
					</p>
					<p>
						Diseño, desarrollo e implementación de sistemas con orientación web.
						Análisis y implementación de nuevas funcionalidades. Mantenimiento
						de aplicaciones existentes. Corrección de errores.
					</p>
				</div>
				<div className="exp-each left">
					<div className="exp-title">
						<h3>UTN INSPT</h3>
						<p className="exp-date">Agosto 2019 a la Actualidad</p>
					</div>
					<p className="bajada">
						Docente de materia Programación III (terciario)
					</p>
					<p>
						Diseño, desarrollo e implementación de sistemas con orientación web.
						Análisis y implementación de nuevas funcionalidades. Mantenimiento
						de aplicaciones existentes. Corrección de errores.
					</p>
				</div>
				<div className="exp-each right">
					<div className="exp-title">
						<h3>UTN INSPT</h3>
						<p className="exp-date">Agosto 2019 a la Actualidad</p>
					</div>
					<p className="bajada">
						Docente de materia Programación III (terciario)
					</p>
					<p>
						Diseño, desarrollo e implementación de sistemas con orientación web.
						Análisis y implementación de nuevas funcionalidades. Mantenimiento
						de aplicaciones existentes. Corrección de errores.
					</p>
				</div>
			</div>
		</section>
	);
}

export default translate("experience-section")(ExperienceSection);
