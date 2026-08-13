import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Formation from "../components/Formacao/Formacao";
import Experience from "../components/Experiencia/Experiencia";
import Certificados from "../components/Certificados/Certificados";

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
                            Sou estudante de Desenvolvimento de Software Multiplataforma na FATEC e apaixonado por tecnologia e desenvolvimento de software.
                        </p>

                        <p>
                            Atualmente, estou aprimorando meus conhecimentos em JavaScript, React, TypeScript, Next.js e Node.js, criando projetos e buscando evoluir cada vez mais como desenvolvedor.
                        </p>

                        <p>
                            Meu objetivo é transformar o que aprendo em soluções reais, continuar crescendo na área e conquistar minha primeira oportunidade como estagiário em desenvolvimento de software.
                        </p>
                        

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