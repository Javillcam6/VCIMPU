
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Nav/Nav.css';

const OptionNav = () => {
    return (
        <nav className='optionContain'>
            <ul className='FirstMenu'>
                <li className='optionMenu'><Link to='/'>Empezar</Link></li>
                <li className='optionMenu'><Link to='/coaches'>Nuestros Coaches</Link></li>
                <li className='optionMenu'><Link to='/cursos'>Nuestros Cursos</Link></li>
                <li className='optionMenu'><Link to='/contacto'>Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default OptionNav;
