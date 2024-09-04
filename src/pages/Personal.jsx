import PersonalInfo from './personalInfo';
import './Personal.css'; 

const Personal = () => {    
    
    return (
    <>
    <PersonalInfo />
            <div className='personal'>
                <h2>Datos personales</h2>
            
            <h3>Alex Verdugo Espricaute </h3>
            <h3>Cormorán 5191, Maipú, Chile</h3>
            <h3>+569 4207 9787</h3>
            <h3>Chileno</h3>
            <h3>alex.verdugo.-@hotmail.com</h3>
            <h3>01 Octubre 1992. </h3>
            </div>
        <br/>
    </>
    );
};

export default Personal;

