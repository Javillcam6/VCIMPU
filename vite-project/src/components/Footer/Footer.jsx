import React from 'react';
import "../Footer/Footer.css";

const Footer = () =>{
    return (
        <footer className="footer-wrapper">
            <section className="footer-section">
                <div className="footer-subscribe">
                    <h2>
                        Suscribete a VCImpulsa y recibe los newsletters mas sobresalientes del fascinante mundo del emprendimiento.
                    </h2>
                    <div className="input-box">
                        <input type="text" placeholder="Ingresa tu correo" className="inputEmail" />
                        <button type="submit">Enviar</button>
                    </div>
                </div>
                <nav className="footer-nav">
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Recursos</h3>
                        <ul>
                            <li><a href="#">Precios</a></li>
                            <li><a href="#">Comunidad</a></li>
                            <li><a href="#">Preguntas frecuentes</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contacto</h3>
                        <ul>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="footer-copyright">
                    <p>Copyright &copy; 2024 - Todos los derechos reservados VCIMPULSA</p>
                    <p>Politica y privacidad</p>
                    <p>Términos y condiciones</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer