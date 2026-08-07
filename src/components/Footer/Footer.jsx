import '../Footer/Footer.css';
import Logo from '../../assets/image (3).png';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { Link } from "react-router-dom";



function Footer() {
    return(
        <>
        <footer>
            
            <section className="footer-info">
                <div className="footer-intro">
                    <img src={ Logo } width="60px" alt="" />
                    <p>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                    <div className='footer-icons'>
                        <FaLinkedin color="#b300ff"/>
                        <FaInstagram color="#b300ff"/>
                        <FaGithub color="#b300ff"/>
                    </div>
                </div>

                <div className="footer-pages">
                    <h3 id='title-footer-pages'>Páginas</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about Us'>Sobre </Link></li>
                        <li><Link to='/projects'>Projetos</Link></li>
                        <li><Link to='/contact'>Contato</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3 id='title-footer-contact'>Contato</h3>
                    <p>donovanbueno456@gmail.com</p>
                    <p>(11) 91474-0589</p>
                </div>

            </section>
        </footer>
        </>
    )
}

export default Footer;