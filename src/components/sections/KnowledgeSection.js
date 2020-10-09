import React from "react";
import KnoHtml from '../../assets/kno-html.svg';



export default function KnowledgeSection() {
  return (
    <section id="knowledge">
      <h2 className="subtitle">Tecnologías</h2>
      <div className="knowledgeitems">
        <div className="knowlege-each">
        <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
        <p className="knolege-tex">Javascript</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Node JS</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">React Native</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Angular JS</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">React</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Html 5</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">CSS</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Objetive C</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Git</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Swift</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Java</p>
        </div>
        <div className="knowlege-each">
          <img src={KnoHtml} alt="Icono HTML5" className="knowlege-img"></img>
          <p className="knolege-tex">Ionic Framework</p>
        </div>
      </div>

    </section>
  );
}


