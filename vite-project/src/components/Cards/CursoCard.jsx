import React from 'react';
import { Link } from 'react-router-dom'; 
import './CursoCard.css'
import negocioImg from "../../assets/img/1.png";
import negocioImg1 from "../../assets/img/2.png";
import negocioImg2 from "../../assets/img/3.png";
import negocioImg3 from "../../assets/img/7.png";
import negocioImg4 from "../../assets/img/5.png";
import negocioImg5 from "../../assets/img/8.png";
import negocioImg6 from "../../assets/img/9.png";
import negocioImg7 from "../../assets/img/10.png";
import negocioImg8 from "../../assets/img/11.png";


function CursoCard () {
    return (
        <section className='cursoContainer'>
            <article className="cardCurso">
                <img src={negocioImg} alt="Imagen del curso" />
                <div className="info-cardCurso">
                    <h3>Nombre del curso</h3>
                    <p>Por Javier VC</p>
                    <p className='priceCurso'>$30 usd</p>
                </div>
                <div className="btn-cardCurso">
                    <p>Detalles del curso</p>
                </div>
            </article>
            <article className="cardCurso">
                <img src={negocioImg1} alt="Imagen del curso" />
                <div className="info-cardCurso">
                    <h3>Nombre del curso</h3>
                    <p>Por Javier VC</p>
                    <p className='priceCurso'>$30 usd</p>
                </div>
                <div className="btn-cardCurso">
                    <p>Detalles del curso</p>
                </div>
            </article>
            <article className="cardCurso">
                <img src={negocioImg2} alt="Imagen del curso" />
                <div className="info-cardCurso">
                    <h3>Nombre del curso</h3>
                    <p>Por Javier VC</p>
                    <p className='priceCurso'>$30 usd</p>
                </div>
                <div className="btn-cardCurso">
                    <p>Detalles del curso</p>
                </div>
            </article>
            <article className="cardCurso">
                <img src={negocioImg3} alt="Imagen del curso" />
                <div className="info-cardCurso">
                    <h3>Nombre del curso</h3>
                    <p>Por Javier VC</p>
                    <p className='priceCurso'>$30 usd</p>
                </div>
                <div className="btn-cardCurso">
                    <p>Detalles del curso</p>
                </div>
            </article>
            <article className="cardCurso">
                <img src={negocioImg4} alt="Imagen del curso" />
                <div className="info-cardCurso">
                    <h3>Nombre del curso</h3>
                    <p>Por Javier VC</p>
                    <p className='priceCurso'>$30 usd</p>
                </div>
                <div className="btn-cardCurso">
                    <p>Detalles del curso</p>
                </div>
            </article>
            <article className="cardCurso">
                <img src={negocioImg5} alt="Imagen del curso" />
                <div className="info-cardCurso">
                    <h3>Nombre del curso</h3>
                    <p>Por Javier VC</p>
                    <p className='priceCurso'>$30 usd</p>
                </div>
                <div className="btn-cardCurso">
                    <p>Detalles del curso</p>
                </div>
            </article>
            <article className="cardCurso">
                <img src={negocioImg6} alt="Imagen del curso" />
                <div className="info-cardCurso">
                    <h3>Nombre del curso</h3>
                    <p>Por Javier VC</p>
                    <p className='priceCurso'>$30 usd</p>
                </div>
                <div className="btn-cardCurso">
                    <p>Detalles del curso</p>
                </div>
            </article>
            <article className="cardCurso">
                <img src={negocioImg7} alt="Imagen del curso" />
                <div className="info-cardCurso">
                    <h3>Nombre del curso</h3>
                    <p>Por Javier VC</p>
                    <p className='priceCurso'>$30 usd</p>
                </div>
                <div className="btn-cardCurso">
                    <p>Detalles del curso</p>
                </div>
            </article>
            <article className="cardCurso">
                <img src={negocioImg8} alt="Imagen del curso" />
                <div className="info-cardCurso">
                    <h3>Nombre del curso</h3>
                    <p>Por Javier VC</p>
                    <p className='priceCurso'>$30 usd</p>
                </div>
                <div className="btn-cardCurso">
                    <p>Detalles del curso</p>
                </div>
            </article>
        </section>
    )
}

export default CursoCard