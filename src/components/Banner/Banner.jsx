import '../Banner/Banner.css'
import { Link } from "react-router-dom";


function Banner() {
    return (
        <>
        <section className="banner-start">
            <div className='banner-content'>
                <h1 id="banner-h1">Conheça seu mais novo Desenvolvedor de Software Multiplataforma</h1>
                <p id="banner-p">
                    Sou um desenvolvedor de software multiplataforma,
                    especializado em criar soluções inovadoras e eficientes
                    para diversos ambientes.
                </p>
                <Link to='/About'><button onClick="" id="banner-btn">Mais Informações →</button></Link>
            </div>
        </section>
        </>
    )
}

export default Banner