import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import { useTheme } from "../../context/useTheme.js";
import { useLanguage } from "../../context/useLanguage.js";
import resume from "../../assets/curriculo.pdf";
import brasil from "../../assets/brasil.png";
import eua from "../../assets/eua.png";
import "./Header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        { to: "/", label: t.nav.home },
        { to: "/about", label: t.nav.about },
        { to: "/projects", label: t.nav.projects },
        { to: "/contact", label: t.nav.contact },
    ];

    return (
        <header className={scrolled ? "scrolled" : ""}>
            <h1>Donovan Bueno de Deus</h1>

            <nav className="desktop-nav">
                {navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
            </nav>

            <div className="btn-container">
                <button
                    className="language-btn"
                    onClick={toggleLanguage}
                    aria-label={language === "pt" ? "Mudar idioma para inglês" : "Switch language to Portuguese"}
                    title={language === "pt" ? "English" : "Português"}
                >
                    <img
                        src={language === "pt" ? eua : brasil}
                        alt={language === "pt" ? "English" : "Português"}
                    />
                    <span>{language.toUpperCase()}</span>
                </button>

                <button className="theme-btn" onClick={toggleTheme} aria-label="Alternar tema">
                    {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
                </button>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
                    {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
                </button>
            </div>

            <nav className={`mobile-nav ${menuOpen ? "active" : ""} ${scrolled ? "scrolled" : ""}`}>
                {navigation.map((item) => <Link key={item.to} onClick={() => setMenuOpen(false)} to={item.to}>{item.label}</Link>)}
            </nav>

            <a
                href={resume}
                download="Donovan-Bueno-Curriculo.pdf"
                className="resume-floating-button"
                aria-label={t.nav.downloadResume}
                title={t.nav.downloadResume}
            >
                <FaFileDownload />
            </a>
        </header>
    );
}

export default Header;
