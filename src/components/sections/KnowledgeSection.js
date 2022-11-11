import React from "react";
// import KnoVue from "../../assets/kno-vue.svg";
import KnoCss from "../../assets/kno-css.svg";
import KnoGit from "../../assets/kno-git.svg";
import KnoHtml from "../../assets/kno-html.svg";
// import KnoMongo from "../../assets/kno-mongo.svg";
import KnoJs from "../../assets/kno-js.svg";
import KnoNode from "../../assets/kno-node.svg";
// import KnoAWS from "../../assets/kno-aws.svg";
// import KnoHeroku from "../../assets/kno-heroku.svg";
import KnoReact from "../../assets/kno-react.svg";
// import KnoExpress from "../../assets/kno-express.svg";
import { translate } from "react-translate";

function KnowledgeSection(props) {
	const { t } = props;
	return (
		<section id="knowledge">
			<h2 className="subtitle">{t("title")}</h2>
			<div className="knowledgeitems">
				<div className="knowlege-each">
					<img src={KnoJs} alt="IconJS" className="knowlege-img"></img>
					<p className="knolege-tex">Javascript</p>
				</div>
				<div className="knowlege-each">
					<img src={KnoNode} alt="IconNode" className="knowlege-img"></img>
					<p className="knolege-tex">Node JS</p>
				</div>
				<div className="knowlege-each">
					<img
						src={KnoReact} //TODO: Change icon to KnoExpress
						alt="IconoExpress"
						className="knowlege-img"
					></img>
					<p className="knolege-tex">Express</p>
				</div>
				<div className="knowlege-each">
					<img src={KnoReact} alt="IconoReact" className="knowlege-img"></img>
					<p className="knolege-tex">React JS</p>
				</div>
				<div className="knowlege-each">
					<img src={KnoHtml} alt="IconoHTML5" className="knowlege-img"></img>
					<p className="knolege-tex">Html 5</p>
				</div>
				<div className="knowlege-each">
					<img src={KnoCss} alt="IconoCSS3" className="knowlege-img"></img>
					<p className="knolege-tex">CSS 3</p>
				</div>
				<div className="knowlege-each">
					<img src={KnoReact} alt="IconReact" className="knowlege-img"></img>
					<p className="knolege-tex">React Native</p>
				</div>
				<div className="knowlege-each">
					<img
						src={KnoReact} //TODO: Change icon too KnoVue
						alt="IconoVUE"
						className="knowlege-img"
					></img>
					<p className="knolege-tex">VUE</p>
				</div>
				<div className="knowlege-each">
					<img
						src={KnoReact} //TODO: Change icon to KnoMongo
						alt="IconoMongoDB"
						className="knowlege-img"
					></img>
					<p className="knolege-tex">Mongo DB</p>
				</div>
				<div className="knowlege-each">
					<img src={KnoGit} alt="IconoGIT" className="knowlege-img"></img>
					<p className="knolege-tex">Git</p>
				</div>
				<div className="knowlege-each">
					<img
						src={KnoReact} //TODO: Change icon to KnoAWS
						alt="IconoAWS"
						className="knowlege-img"
					></img>
					<p className="knolege-tex">AWS</p>
				</div>
				<div className="knowlege-each">
					<img
						src={KnoReact} //TODO: Chaange icon to KnoHeroku
						alt="IconoHeroku"
						className="knowlege-img"
					></img>
					<p className="knolege-tex">Heroku</p>
				</div>
			</div>
		</section>
	);
}

export default translate("knowledege-section")(KnowledgeSection);
