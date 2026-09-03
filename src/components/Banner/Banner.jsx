import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const phrases = [
    "Transformo problemas em soluções digitais.",
    "Código limpo, organizado e pensado para crescer.",
    "Aprendo rápido e gosto de transformar ideias em produtos.",
    "Comprometimento, curiosidade e foco em resultado.",
    "Pronto para evoluir junto com o seu time."
];

const particles = [
    { x: "8%", y: "12%", delay: "0s", size: "5px" },
    { x: "17%", y: "34%", delay: "-1.4s", size: "3px" },
    { x: "12%", y: "71%", delay: "-2.1s", size: "4px" },
    { x: "28%", y: "18%", delay: "-3s", size: "3px" },
    { x: "35%", y: "78%", delay: "-1.1s", size: "5px" },
    { x: "48%", y: "10%", delay: "-2.7s", size: "3px" },
    { x: "57%", y: "84%", delay: "-3.8s", size: "4px" },
    { x: "70%", y: "16%", delay: "-1.8s", size: "5px" },
    { x: "79%", y: "34%", delay: "-3.3s", size: "3px" },
    { x: "91%", y: "20%", delay: "-0.8s", size: "4px" },
    { x: "88%", y: "70%", delay: "-2.5s", size: "5px" },
    { x: "72%", y: "88%", delay: "-4s", size: "3px" },
    { x: "24%", y: "91%", delay: "-3.5s", size: "4px" },
    { x: "4%", y: "52%", delay: "-1.9s", size: "3px" }
];

function Banner() {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const phraseTimer = window.setInterval(() => {
            setPhraseIndex((current) => (current + 1) % phrases.length);
        }, 2600);

        const handleScroll = () => {
            const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
            const progress = Math.min(window.scrollY / maxScroll, 1);
            setRotation(progress * 720);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.clearInterval(phraseTimer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="hero-banner">
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />

            <div className="hero-particles" aria-hidden="true">
                {particles.map((particle, index) => (
                    <span
                        className="hero-particle"
                        key={index}
                        style={{
                            left: particle.x,
                            top: particle.y,
                            width: particle.size,
                            height: particle.size,
                            animationDelay: particle.delay
                        }}
                    />
                ))}
                <span className="circuit circuit-one" />
                <span className="circuit circuit-two" />
                <span className="circuit circuit-three" />
            </div>

            <div className="hero-content">
                <div className="hero-copy">
                    <span className="hero-eyebrow">DESENVOLVEDOR DE SOFTWARE</span>
                    <h1>
                        Eu transformo <span>ideias</span> em experiências digitais.
                    </h1>
                    <p className="hero-description">
                        Sou Donovan Bueno, estudante de Desenvolvimento de Software Multiplataforma,
                        apaixonado por tecnologia e por construir soluções que realmente resolvem problemas.
                    </p>

                    <div className="hero-phrase" aria-live="polite">
                        <span className="hero-phrase-mark">&gt;_</span>
                        <span key={phraseIndex} className="hero-phrase-text">
                            {phrases[phraseIndex]}
                        </span>
                    </div>

                    <div className="hero-actions">
                        <Link to="/projects" className="hero-btn hero-btn-primary">
                            Ver meus projetos <span>↗</span>
                        </Link>
                        <Link to="/contact" className="hero-btn hero-btn-secondary">
                            Vamos conversar
                        </Link>
                    </div>
                </div>

                <div className="hero-visual" aria-label="Retrato de Donovan Bueno">
                    <div className="orbit orbit-one" />
                    <div className="orbit orbit-two" />
                    <div className="orbit-dot orbit-dot-one" />
                    <div className="orbit-dot orbit-dot-two" />

                    <div
                        className="portrait-coin"
                        style={{ transform: `rotateY(${rotation}deg)` }}
                    >
                        <div className="coin-face coin-front">
                            <div className="portrait-image" role="img" aria-label="Foto de Donovan Bueno" />
                        </div>
                        <div className="coin-face coin-back">
                            <span className="coin-code">&lt;/&gt;</span>
                            <strong>DONOVAN</strong>
                            <small>BUILD · LEARN · EVOLVE</small>
                        </div>
                    </div>

                    <div className="visual-label visual-label-top">REACT · JS · CSS</div>
                    <div className="visual-label visual-label-bottom">FULL STACK IN PROGRESS</div>
                </div>
            </div>

            <div className="hero-scroll-hint" aria-hidden="true">
                <span>SCROLL</span>
                <i />
            </div>
        </section>
    );
}

export default Banner;
