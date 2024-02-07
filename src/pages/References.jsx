// References.jsx

import React from 'react';
import './References.css';

const References = () => {
    return (
        <>
            <div className='References'>
                <h2>Referencias</h2>
            </div>

            <div className='table-card'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cargo</th>
                            <th>Detalles de referencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Geraldine Montecinos</td>
                            <td>Ex Gerente en Sp Digital,
                                Gerente en GGames.cl y en Lintech.cl
                            </td>
                            <td>+569 8802 0777</td>
                        </tr>
                        <tr>
                            <td>Boris Astorga</td>
                            <td>Profesor del Instituto Inacap</td>
                            <td>+569 8400 8276</td>
                        </tr>
                        {/* Agrega más filas según sea necesario */}
                    </tbody>
                </table>
            </div>

            <br />
        </>
    );
};

export default References;
