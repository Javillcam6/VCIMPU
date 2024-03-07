import React from 'react';
import { Link } from 'react-router-dom'; 
import './Cardinfo.css'
const CardInfo = () => {
    return (
        <section className='cardISection'>
            <div className="cardI">
                <p className="cardI-title">Certificación</p>
                <p className="small-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                        eum nihil itaque!
                </p>
                <div className="go-corner">
                    <div className="go-arrow">→</div>
                </div>
            </div>
            <div className="cardI">
                <p className="cardI-title">Coaching Personlizado</p>
                <p className="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                eum nihil itaque!
                </p>
                <div className="go-corner">
                    <div className="go-arrow">→</div>
                </div>
            </div>
            <div className="cardI">
                <p className="cardI-title">Networking garantizado</p>
                <p className="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                eum nihil itaque!
                </p>
                <div className="go-corner">
                    <div className="go-arrow">→</div>
                </div>
            </div>
            <div className="cardI">
                <p className="cardI-title">Bolsa de trabjo</p>
                <p className="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                eum nihil itaque!
                </p>
                <div className="go-corner">
                    <div className="go-arrow">→</div>
                </div>
            </div>
        </section>

    );
}

export default CardInfo;
