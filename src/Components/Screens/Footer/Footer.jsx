import React from 'react';
import './Footer.css'; // Ajusta la ruta según la estructura de directorios
import logoFacebook from '../../Assets/logos/logoFacebook.png';
import logoLinkedin from '../../Assets/logos/logoLinkedin.png';
import logoGitHub from '../../Assets/logos/logoGitHub.png';



const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-section'>
                    <h2>Contacto</h2>
                    <p>Correo: alex.verdugo.-@hotmail.com</p>
                    <p>Celular: +569 4207 9787</p>
                </div>
                <div className='footer-section'>
                    <h2>Sígueme en </h2>
                    <div className='social-icons'>
                    <a href='https://www.facebook.com/lostinthevoidd/'><img src={logoFacebook} alt='Facebook' /></a>
                    <a href='https://github.com/AlexVerdugoEspricaute'><img src={logoGitHub} alt='GitHub' /></a>
                    <a href='https://www.linkedin.com/in/alex-verdugo-570647a9'><img src={logoLinkedin} alt='LinkedIn' /></a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2024 Alex Verdugo Program. Todos los derechos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;
