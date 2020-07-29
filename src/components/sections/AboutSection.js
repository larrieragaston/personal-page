import React from "react";
import * as profile from '../../assets/profile-picture.png';
import * as background from '../../assets/profile-background.png';

export default function AboutSection() {
  return (
    <section id="home">
      <div className="main-about">
        <h1>Gaston A. Larriera</h1>
        <h2 className="subtitle">Front-end developer, Software devolper, Back-end developer, Docente y Speaker.</h2>
        <p className="description">I am a 26 years old tech enthusiast from Buenos Aires, Argentina. I live with my wife and son, and as you can imagine, I love spending my time with them. Besides that, I like to play soccer, watch TV series and movies, and most important of all: code.</p>
        <button type="button" href="#contact"> Contactar </button>
      </div>
      <div className="image">
        <img src={profile} alt="Photo"></img>
        <img src={background} alt="Background"></img>
      </div>
    </section>
  );
}
