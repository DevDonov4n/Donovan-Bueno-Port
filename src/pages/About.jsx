import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Formation from "../components/Formacao/Formacao";
import Experience from "../components/Experiencia/Experiencia";
import Certificados from "../components/Certificados/Certificados";
import { useLanguage } from "../context/useLanguage.js";
import "./About.css";

function About() {
    const { t } = useLanguage();
    return (
        <>
            <Header />
            <main>
                <section className="banner-about"><h1>{t.pages.about}</h1></section>
                <section className="about-content">
                    <div className="about-info">
                        <h1>{t.about.hello}</h1>
                        <h2>{t.about.intro} <span id="about-color">Donovan Bueno de Deus</span></h2>
                        <p>{t.about.description1}</p>
                        <p>{t.about.description2}</p>
                        <p>{t.about.description3}</p>
                    </div>
                </section>
                <Experience />
                <Formation />
                <Certificados />
            </main>
            <Footer />
        </>
    );
}
export default About;
