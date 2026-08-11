import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useTheme } from "../../context/useTheme.js";

import "./Header.css";

function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { theme, toggleTheme } = useTheme();


    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    return (
        <header className={scrolled ? "scrolled" : ""}>

            <h1>
                Donovan Bueno de Deus
            </h1>


            {/* Menu Desktop */}

            <nav className="desktop-nav">

                <Link to="/">
                    Home
                </Link>

                <Link to="/about">
                    Sobre
                </Link>

                <Link to="/projects">
                    Projetos
                </Link>

                <Link to="/contact">
                    Contato
                </Link>

            </nav>


            {/* Botão Dark / Light */}

            <button
                className="theme-btn"
                onClick={toggleTheme}
                aria-label="Alternar tema"
            >

                {theme === "dark" ? (
                    <MdLightMode />
                ) : (
                    <MdDarkMode />
                )}

            </button>


            {/* Botão Mobile */}

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >

                {menuOpen
                    ? <IoClose />
                    : <HiOutlineMenuAlt3 />
                }

            </button>


            {/* Menu Mobile */}

            <nav
                className={`mobile-nav ${menuOpen ? "active" : ""} ${scrolled ? "scrolled" : ""}`}
            >

                <Link
                    onClick={() => setMenuOpen(false)}
                    to="/"
                >
                    Home
                </Link>

                <Link
                    onClick={() => setMenuOpen(false)}
                    to="/about"
                >
                    Sobre
                </Link>

                <Link
                    onClick={() => setMenuOpen(false)}
                    to="/projects"
                >
                    Projetos
                </Link>

                <Link
                    onClick={() => setMenuOpen(false)}
                    to="/contact"
                >
                    Contato
                </Link>

            </nav>

        </header>
    );
}


export default Header;