import React from 'react';
import './PersonalInfo.css'; 
import { Link } from 'react-router-dom';

const PersonalInfo = () => {
    return (
    <>
<ul className='nav-links'>
                <li><Link className='red' to='/personal-info/personal'>DATOS PERSONALES</Link></li>
                <li><Link className='blue' to='/personal-info/skills'>HABILIDADES</Link></li>
                <li><Link className='green' to='/personal-info/education'>EDUCACIÓN</Link></li>
                <li><Link className='yellow' to='/personal-info/courses'>CERTIFICADOS Y CURSOS</Link></li>
            </ul>
    </>
    );
};

export default PersonalInfo;
