import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom"
import "./footer.css"

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='redesSociales'>
        <div className='redes'>
          <a href="#"><FaFacebookF/></a>
          <a href="#"><FaInstagram/></a>
          <a href="#"><FaTwitter/></a>
          <a href="#"><FaYoutube/></a>
        </div>
        <div className='redesEsp'></div>
      </div>
      <div className='links'>
        <div className='linksA'>
          <a href="#">Audio descriptivo</a>
          <a href="#">Relaciones con inversionistas</a>
          <a href="#">Avisos legales</a>
        </div>
        <div className='linksB'>
          <a href="#">Centro de ayuda</a>
          <a href="#">Empleo</a>
          <a href="#">Preferencias de cookies</a>
        </div>
        <div className='linksC'>
          <a href="#">Tarjetas de regalo</a>
          <a href="#">Términos de uso</a>
          <a href="#">Información corporativa</a>
        </div>
        <div className='linksD'>
          <a href="#">Prensa</a>
          <a href="#">Privacidad</a>
          <Link to="/contact">Contáctanos</Link>
        </div>
      </div>
      <div className='bottom'>
        <div className='bottomService'>Código de servicio</div>
        <p>© Watch.me 2022 - Sebastian Alfieri</p>
      </div>
    </div>
  )
}

export default Footer