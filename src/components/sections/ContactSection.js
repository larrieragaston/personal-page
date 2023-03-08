import React, { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import * as ContactPhoto from "../../assets/contact_photo.png";
// import ContWhats from "../../assets/cont-whatsapp.svg";
import ContGmail from "../../assets/cont-gmail.svg";
import ContLinkedin from "../../assets/cont-linkedin.svg";
import ContGithub from "../../assets/cont-github.svg";
import { translate } from "react-translate";

function ContactSection(props) {
	init("jGf7b02invpZr-iJF");
	const { t } = props;
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_21y098f",
				"template_qdmbl8t",
				form.current,
				"jGf7b02invpZr-iJF"
			)
			.then(
				(result) => {
					alert(t("email-sent-success"));
					setName("");
					setEmail("");
					setMessage("");
				},
				(error) => {
					alert(t("email-sent-failed"));
					console.log(error.text);
				}
			);
	};
	return (
		<section id="contact">
			<h2 className="subtitle">{t("title")}</h2>
			<div className="contact_conteiner">
				<div className="contact_left">
					<p>{t("description")}</p>
					<div className="contact_form">
						<form onSubmit={handleSubmit} className="flex" ref={form}>
							<label htmlFor="contact_name">
								<input
									type="text"
									name="contact_name"
									placeholder={t("name-placeholder")}
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</label>
							<label htmlFor="contact_email">
								<input
									type="email"
									name="contact_email"
									placeholder={t("email-placeholder")}
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</label>
							<label htmlFor="contact_message">
								<textarea
									id="contact_message"
									name="contact_message"
									placeholder={t("message-placeholder")}
									required
									value={message}
									onChange={(e) => setMessage(e.target.value)}
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
