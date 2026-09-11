import '../Footer/Footer.css';
import Logo from '../../assets/image (3).png';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/useLanguage.js";

function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <section className="footer-info">
                <div className="footer-intro">
                    <img src={Logo} width="60px" alt="Donovan Bueno" />
                    <p>© {currentYear} Donovan Bueno de Deus.</p>
                    <div className="footer-icons">
                        <a href="https://www.linkedin.com/in/donovan-bueno-de-deus-2b77b8266/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://instagram.com/donov4n.b" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://github.com/devdonov4n" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                </div>
                <div className="footer-pages">
                    <h3 id="title-footer-pages">{t.footer.pages}</h3>
                    <ul>
                        <li><Link to="/">{t.nav.home}</Link></li>
                        <li><Link to="/about">{t.nav.about}</Link></li>
                        <li><Link to="/projects">{t.nav.projects}</Link></li>
                        <li><Link to="/contact">{t.nav.contact}</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3 id="title-footer-contact">{t.footer.contact}</h3>
                    <p>donovanbueno456@gmail.com</p>
                    <p>(11) 91474-0589</p>
                </div>
            </section>
        </footer>
    );
}
export default Footer;
