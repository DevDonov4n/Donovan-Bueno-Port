import { Link } from "react-router-dom";
import Logo from '../../assets/dnc-logo 1.svg'
import '../Header/Header.css'



function Header() {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <h1>Donovan Bueno de Deus</h1>
                </div>
            </div>
            <nav>
                <ul className="d-flex">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>Sobre </Link></li>
                    <li><Link to='/projects'>Projetos </Link></li>
                    <li><Link to='/contact'>Contato </Link></li>
                </ul>
            </nav>
        </header>
    )
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

export default Header;