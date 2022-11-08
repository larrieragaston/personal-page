import React from "react";
import * as ContactPhoto from "../../assets/contact_photo.png";
// import ContWhats from "../../assets/cont-whatsapp.svg";
import ContGmail from "../../assets/cont-gmail.svg";
import ContLinkedin from "../../assets/cont-linkedin.svg";
import ContGithub from "../../assets/cont-github.svg";
import { translate } from "react-translate";

function ContactSection(props) {
	const { t } = props;
	return (
		<section id="contact">
			<h2 className="subtitle">{t("title")}</h2>
			<div className="contact_conteiner">
				<div className="contact_left">
					<p>{t("description")}</p>
					<div className="contact_form">
						<form action="enviar" method="post" className="flex">
							<label htmlFor="contacto_nombre">
								<input
									type="text"
									placeholder={t("name-placeholder")}
									name="mail_contacto"
									required
								/>
							</label>
							<label htmlFor="contacto_mail">
								<input
									type="email"
									name="contacto_mail"
									placeholder={t("email-placeholder")}
									required
								/>
							</label>
							<label htmlFor="contacto_consulta">
								<textarea
									id="contacto_consulta"
									name="contacto_consulta"
									placeholder={t("message-placeholder")}
									required
								></textarea>
							</label>

							<input type="submit" value={t("button")} />
						</form>
					</div>
				</div>
				<div className="contact_right">
					<div className="contact_photo">
						<img src={ContactPhoto} className="contact_gaston" alt="guy"></img>
						<div className="circlewhite circle_one">
							<a
								href="https://www.linkedin.com/in/gast%C3%B3n-ariel-larriera-6b985466/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={ContLinkedin}
									alt="LINKEDIN"
									className="contact_item"
								></img>
							</a>
						</div>
						<div className="circlewhite circle_two">
							<a
								href="mailto: larriera.gaston@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={ContGmail} alt="GMAIL" className="contact_item"></img>
							</a>
						</div>
						<div className="circlewhite circle_three">
							<a
								href="https://github.com/larrieragaston"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={ContGithub}
									alt="GITHUB"
									className="contact_item"
								></img>
							</a>
						</div>
						{/* <div className="circlewhite circle_four">
							<a href="#" target="_blank" rel="noopener noreferrer">
								<img
									src={ContWhats}
									alt="WHAATSAPP"
									className="contact_item"
								></img>
							</a>
						</div> */}
						<div className="glove">
							<p>{t("bubble-comment")}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default translate("contact-section")(ContactSection);
