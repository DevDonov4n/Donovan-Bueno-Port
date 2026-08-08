import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./About.css"
function About() {
    return (
        <>
            <Header />
            <section className="banner-about">
                <h1> Sobre Mim </h1>
            </section>
            <section className="about-content">
                <h1>Olá Mundo!<br/>Eu me chamo Donovan Bueno de Deus</h1>
                <div className="about-info">
                    <p id="about-color">It is a long established fact that a reader will be distracted by the of readable content of a page</p>
                    <p className="about-text">when lookings at its layouts the points spriof using that it has a more less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
                    <p className="about-text">when lookings at its layouts the points spriof using that it has a more less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>

                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;