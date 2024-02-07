import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = ({ onClose }) => {
    return (
            <div className='modal'>
            <button className='close-button' onClick={onClose}>X</button>
            <div className='wrapper'>
                <form action="">
                        <h1>Ingresar</h1>
                    <div className="input-box">
                            <input type="text" placeholder='Nombre' required />
                            <FaUser className='icon' />
                        </div>
                            <div className="input-box">
                        <input type="password" placeholder='Contraseña' required />
                        <FaLock className='icon' />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Recordarme</label>
                        <a href='#'>¿Has olvidado tu contraseña?</a>
                        </div>
                        <button type='submit'>Ingresar</button>
                        <div className='register-link'>
                            <p>no tienes una cuenta? <a href='#'>Registrate</a></p>
                        </div>
                        <h5>Alex Verdugo E.</h5>
                    </form>
                </div>
            </div>
    );
}
export default LoginForm;
