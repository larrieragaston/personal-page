import React from "react";
import Arrow from '../../assets/arrow.svg';
import * as profile from '../../assets/foto_gaston.png';



export default function AboutSection() {
  return (
    <section id="home">
      <div className="main-about">
        <h1>Gaston A. Larriera</h1>
        <h2 className="subtitle">Front-end developer, Software devolper, Back-end developer, Docente y Speaker.</h2>
        <p className="description">I am a 26 years old tech enthusiast from Buenos Aires, Argentina. I live with my wife and son, and as you can imagine, I love spending my time with them. Besides that, I like to play soccer, watch TV series and movies, and most important of all: code.</p>
        <button type="button" href="#contact" className="botonCv">
           Descargar CV
           <img src={Arrow} alt="Icono de flecha" className="arrow_download"></img>
        </button>
      </div>
      <div className="image">
        <img src={profile} alt="Photo dev guy"></img>
      </div>
    </section>
  );
}
