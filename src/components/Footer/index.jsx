import React from 'react'
import './style.scss'
import { FaGithub , FaTwitter , FaFacebookF } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className='footer container'>
        <div className="footer__icons">
          <FaTwitter/>
          <FaFacebookF/>
          <FaGithub/>
        </div>
        <div className="footer__content">Yusif Sardarli © Your Website 2023</div>
    </footer>
  )
}
