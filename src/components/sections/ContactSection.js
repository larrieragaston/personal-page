import React from "react";
import * as ContactPhoto from '../../assets/contact_photo.png';
import ContWhats from '../../assets/cont-whatsapp.svg';
import ContGmail from '../../assets/cont-gmail.svg';
import ContLinkedin from '../../assets/cont-linkedin.svg';
import ContGithub from '../../assets/cont-github.svg';

export default function ContactSection() {
  return (
    <section id="contact">
      <h2 className="subtitle">Contacto</h2>
      <div className="contact_conteiner">
        <div className="contact_left">
            <p>Si tenés alguna duda, alguna idea interesante, algún proyecto o si necesitas una cotización para algún trabajo, este es el lugar para dejarme tu mensaje.</p>
            <div class="contact_form">
              <form action="enviar" method="post" className="flex">
                <label for="contacto_nombre">
                <input type="text" placeholder="Nombre" name="mail_contacto" required/>                
                </label>
                <label for="contacto_mail">
                <input type="email" name="contacto_mail" placeholder="E-Mail" required/>
                </label>
                <label for="contacto_consulta">
                <textarea id="contacto_consulta" name="contacto_consulta" placeholder="Mensaje" required></textarea>
                </label>
                
                <input type="submit" value="Enviar"/>
            
              </form>
            </div>
            
        </div>
        <div className="contact_right">
          <div className="contact_photo">
              <img src={ContactPhoto} className="contact_gaston" alt="Photo dev guy"></img>
            <div className="circlewhite circle_one">
              <a href="#" target="_blank"><img src={ContLinkedin} alt="Icono HTML5" className="contact_item"></img></a>
            </div>
            <div className="circlewhite circle_two">
              <a href="#" target="_blank"><img src={ContGmail} alt="Icono HTML5" className="contact_item"></img></a>
            </div>
            <div className="circlewhite circle_three">
             <a href="#" target="_blank"><img src={ContGithub} alt="Icono HTML5" className="contact_item"></img></a>
            </div>
            <div className="circlewhite circle_four">
              <a href="#" target="_blank"><img src={ContWhats} alt="Icono HTML5" className="contact_item"></img></a>
            </div>
            <div className="glove">
              <p>¡Si lo preferís contáctame por los siguientes medios!</p>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
}
