import React from "react";
import KnoAngular from '../../assets/kno-angular.svg';
import KnoCss from '../../assets/kno-css.svg';
import KnoGit from '../../assets/kno-git.svg';
import KnoHtml from '../../assets/kno-html.svg';
import KnoIonic from '../../assets/kno-ionic.svg';
import KnoJavascript from '../../assets/kno-javascript.svg';
import KnoJs from '../../assets/kno-js.svg';
import KnoNode from '../../assets/kno-node.svg';
import KnoObjetivec from '../../assets/kno-objetivec.svg';
import KnoReact from '../../assets/kno-react.svg';
import KnoSwift from '../../assets/kno-swift.svg';


export default function KnowledgeSection() {
  return (
    <section id="knowledge">
      <h2 className="subtitle">Tecnologías</h2>
      <div className="knowledgeitems">
        <div className="knowlege-each">
        <img src={KnoJavascript} alt="Icono HTML5" className="knowlege-img"></img>
        <p className="knolege-tex">Javascript</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoNode} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Node JS</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoReact} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">React Native</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoAngular} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Angular JS</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoReact} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">React</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Html 5</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoCss} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">CSS</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoObjetivec} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Objetive C</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoGit} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Git</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoSwift} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Swift</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoJs} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Java</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoIonic} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Ionic Framework</p>
        </div>
      </div>

    </section>
  );
}


