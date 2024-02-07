import React, { useState } from 'react';
import './Navbar.css';
import logoGato from '../../Assets/logos/logoGato.png';
import LoginForm from '../../LoginForm/LoginForm.jsx';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [isLoginFormVisible, setLoginFormVisible] = useState(false);

    const handleLoginButtonClick = () => {
        setLoginFormVisible(true);
    };

    const handleLoginFormClose = () => {
        setLoginFormVisible(false);
    };

    return (
        <div className='navbar'>
            <Link to='/'><img src={logoGato} alt='Tu logo' className='logo' /></Link>
            <ul className='nav-links'>
                <li><Link to='/'>INICIO</Link></li>
                <li><Link to='personal-info/personal'>DATOS PERSONALES</Link></li>
                <li><Link to='references'>REFERENCIAS</Link></li>
                <li><Link to='comments'>SOBRE MI</Link></li>
            </ul>
            <button className='button' onClick={handleLoginButtonClick}>Iniciar</button>
            {isLoginFormVisible && <LoginForm onClose={handleLoginFormClose} />}
        </div>
        
    );
}

export default Navbar;
