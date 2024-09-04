import React from 'react';
import { Link } from 'react-router-dom';
import './Skills.css'; 
import PersonalInfo from './PersonalInfo';

const Skills = () => {
    return (
        <>
        <PersonalInfo/>
                    <div className='skills'>
                        <h2>Habilidades</h2>
                <ul>
                    <li>Resolución de Problemas.</li>
                    <li>Manejo del Tiempo.</li>
                    <li>Empatía.</li>
                    <li>Comunicación Efectiva.</li>
                </ul>

                <h2>Experiencia</h2>

                <h4> Sp Digital limitada.
                    Providencia, Chile.
                    Jun 2016 - Mar 2022.</h4>

                <ul> Vendedor productos de computación.
                    <li>Habilidades en atención al cliente, resolución de problemas y manejo de efectivo.</li>
                    <li>Conocimientos en productos y servicios ofrecidos, destacando características y beneficios.</li>
                    <li>Logro de objetivos de ventas mensuales, superando metas y obteniendo reconocimiento como vendedor del mes.</li>
                </ul>
                    </div>
                <br/>

        
                
            </>
    );
};

export default Skills;
