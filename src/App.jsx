import { useState } from 'react';
import Navbar from './Components/Screens/Navbar/Navbar';
import Footer from './Components/Screens/Footer/Footer';
import Body from './Components/Screens/Body/Body';
import fondoMontain from './Components/Assets/fonts/fondoMontain.mp4';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo.jsx';
import References from './pages/References';
import Comments from './pages/Comments.jsx';
import Skills from './pages/Skills.jsx';
import Courses from './pages/Courses.jsx';
import Education from './pages/Education.jsx';
import Personal from './pages/Personal.jsx'


function App() {
  return (
    <div className='app-container'>
      <video autoPlay muted loop className='background-video'>
        <source src={fondoMontain} type='video/webm' />
      </video> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/personal-info' element={<PersonalInfo />} /> 
        <Route path='/personal-info/Personal' element={<Personal />} />   
        <Route path='/personal-info/skills' element={<Skills />} />   
        <Route path='/personal-info/education' element={<Education />} />  
        <Route path='/personal-info/courses' element={<Courses />} />                        
        <Route path='/references' element={<References />} />  
        <Route path='/comments' element={<Comments />} />  
      </Routes>    
      <Footer />  
    </div> 
  );
}

export default App;
