import React from "react";
import * as ContactPhoto from "../../assets/contact_photo.png";
import ContWhats from "../../assets/cont-whatsapp.svg";
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
					<div class="contact_form">
						<form action="enviar" method="post" className="flex">
							<label for="contacto_nombre">
								<input
									type="text"
									placeholder={t("name-placeholder")}
									name="mail_contacto"
									required
								/>
							</label>
							<label for="contacto_mail">
								<input
									type="email"
									name="contacto_mail"
									placeholder={t("email-placeholder")}
									required
								/>
							</label>
							<label for="contacto_consulta">
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
						<img
							src={ContactPhoto}
							className="contact_gaston"
							alt="Photo dev guy"
						></img>
						<div className="circlewhite circle_one">
							<a href="#" target="_blank">
								<img
									src={ContLinkedin}
									alt="Icono HTML5"
									className="contact_item"
								></img>
							</a>
						</div>
						<div className="circlewhite circle_two">
							<a href="#" target="_blank">
								<img
									src={ContGmail}
									alt="Icono HTML5"
									className="contact_item"
								></img>
							</a>
						</div>
						<div className="circlewhite circle_three">
							<a href="#" target="_blank">
								<img
									src={ContGithub}
									alt="Icono HTML5"
									className="contact_item"
								></img>
							</a>
						</div>
						<div className="circlewhite circle_four">
							<a href="#" target="_blank">
								<img
									src={ContWhats}
									alt="Icono HTML5"
									className="contact_item"
								></img>
							</a>
						</div>
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
