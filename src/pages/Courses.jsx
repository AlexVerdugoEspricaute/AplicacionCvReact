import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import PersonalInfo from './personalInfo';


const Courses = () => {
    return (
        <>
        <PersonalInfo/>
<div className='container'>      
<h3>CONOCIMIENTOS DE PROGRAMACION</h3>
<div className='courses'>
<ul className='card'>LENGUAJES DE PROGRAMACIÓN:</ul>
    <li>PYTHON, </li> 
    <li>JAVASCRIPT,</li>
    <li>JAVA,</li>
    <li>C++.</li> 

<ul className='card'>FRAMEWORKS Y BIBLIOTECAS FRONTEND:</ul>
    <li>REACT.JS,</li>
    <li>Vite.js,</li>
    <li>BOOTSTRAP,</li>
    <li>Yarn & npm.</li>

<ul className='card'>FRAMEWORKS Y BIBLIOTECAS BACKEND:</ul>
    <li>DJANGO (PYTHON),</li> 
    <li>NODE.JS, </li>  
    <li>SPRING (JAVA).</li>  

<ul className='card'> BASES DE DATOS:</ul>
    <li>MYSQL,</li> 
    <li>MONGODB,</li>   
    <li>SQLITE,</li>  
    <li>MARIADB.</li> 

<ul className='card'>HERRAMIENTAS DE CONTROL DE VERSIONES:</ul>
    <li>GITHUB.</li> 

<ul className='card'>DESARROLLO WEB:</ul>
    <li>HTML5,</li> 
    <li>CSS3.</li>  

<ul className='card'>DESARROLLO DE APLICACIONES MÓVILES:</ul>
    <li>REACT NATIVE,</li>   
    <li>KOTLIN (PARA ANDROID).</li> 

<ul className='card'>METODOLOGÍAS DE DESARROLLO:</ul>
    <li>AGILE (SCRUM, KANBAN).</li>  

<ul className='card'>CLOUD COMPUTING:</ul>
    <li>AZURE.</li>  

</div>
<br/>        
</div>     
</>
    );
};

export default Courses;
