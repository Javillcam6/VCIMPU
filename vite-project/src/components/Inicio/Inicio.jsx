import React from 'react';
import Logo from '../../assets/img/vc.png';
import OptioNaV from '../Nav/Nav.jsx';
import CardInfo from '../Cards/Cardinfo.jsx';
import CardPlan from '../Cards/CardPlan.jsx'
import './Inicio.css'; 

const Inicio = () => {
    return (
        <section className='titleContainer'>
            <div className='containerVCI'>
                <div className='titleText'>
                    <h1 className='titleGradient'>VC IMPULSA</h1>
                    <h1 className='h1Title'>Estructurando vidas</h1>
                    <h1 className='h1Title'>Guiándolas hacia el éxito</h1>
                    <h3 className='h3Title'>Eleva tu empresa y tu desarrollo personal. ¡Únete ahora!</h3>
                </div>
                <div className='imgInicio'>
                    <img src={Logo} className='mainLogo' alt='Logo VC' />
                </div>
            </div>
            <nav><OptioNaV/></nav>
            <CardInfo/>
            <CardPlan/>

        </section>
    );
};

export default Inicio;
