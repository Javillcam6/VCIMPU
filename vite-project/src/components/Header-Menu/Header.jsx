import React from 'react';
import "./Header.css";
import Logo from '../../assets/img/vc.png';
import { BsJustify, BsCart2  } from "react-icons/bs";


const headerMenu = () => {
    return (
        <header>
            <nav className='navBar'>
                <div className='logo'>
                    <img src={Logo} className='logoVCI' />
                </div>
                <div className='menu'>
                    <div className='menu-links'>
                        <a href='/'>Inicio</a>
                        <a href='/Cursos'>Cursos</a>
                        <a href='/Recursos'>Recursos</a>
                        <a href='Carrito' className="text-white"><BsCart2 /></a>
                        <a href='/Perfil'>Mi perfil</a>
                    </div>
                <button className='log-in'>Log-in</button>    
                </div>
                <div className='menu-btn'>
                    <BsJustify />
                </div>
            </nav>
        </header>
    );
}

export default headerMenu;

