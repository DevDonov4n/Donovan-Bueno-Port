import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Formation from "../components/Formacao/Formacao";

import "./About.css";

function About() {

    return (
        <>
            <Header />

            <main>

                {/* Banner */}

                <section className="banner-about">

                    <h1>
                        Sobre Mim
                    </h1>

                </section>


                {/* Sobre */}

                <section className="about-content">

                    <div className="about-info">

                        <h1>
                            Olá Mundo!
                        </h1>

                        <h2>
                            Eu me chamo{" "}
                            <span id="about-color">
                                Donovan Bueno de Deus
                            </span>
                        </h2>

                        <p>
                            Sou estudante de Desenvolvimento de Software
                            Multiplataforma e desenvolvedor focado em
                            desenvolvimento web.
                        </p>

                        <p>
                            Atualmente venho aprimorando meus conhecimentos
                            em JavaScript, React, Next.js, Node.js,
                            TypeScript e desenvolvimento de aplicações.
                        </p>

                    </div>

                </section>


                {/* Formação */}

                <Formation />

            </main>

            <Footer />
        </>
    );
}

export default About;