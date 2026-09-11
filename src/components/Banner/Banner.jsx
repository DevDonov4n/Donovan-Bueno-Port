import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/useLanguage.js";
import "./Banner.css";

const particles = [
    ["8%","12%","0s","5px"],["17%","34%","-1.4s","3px"],["12%","71%","-2.1s","4px"],["28%","18%","-3s","3px"],["35%","78%","-1.1s","5px"],["48%","10%","-2.7s","3px"],["57%","84%","-3.8s","4px"],["70%","16%","-1.8s","5px"],["79%","34%","-3.3s","3px"],["91%","20%","-0.8s","4px"],["88%","70%","-2.5s","5px"],["72%","88%","-4s","3px"],["24%","91%","-3.5s","4px"],["4%","52%","-1.9s","3px"]
];

function Banner() {
    const { t } = useLanguage();
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const phraseTimer = window.setInterval(() => setPhraseIndex((current) => (current + 1) % t.banner.phrases.length), 2600);
        const mediaQuery = window.matchMedia("(max-width: 520px)");
        const handleScroll = () => {
            if (!mediaQuery.matches) return setRotation(0);
            const progress = Math.min(window.scrollY / 500, 1);
            setRotation(180 + progress * 180);
        };
        const handleViewportChange = () => { setIsMobile(mediaQuery.matches); handleScroll(); };
        setIsMobile(mediaQuery.matches); window.addEventListener("scroll", handleScroll, { passive: true }); mediaQuery.addEventListener("change", handleViewportChange); handleScroll();
        return () => { window.clearInterval(phraseTimer); window.removeEventListener("scroll", handleScroll); mediaQuery.removeEventListener("change", handleViewportChange); };
    }, [t.banner.phrases.length]);

    return (
        <section className="hero-banner">
            <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
            <div className="hero-particles" aria-hidden="true">
                {particles.map(([x,y,delay,size], index) => <span className="hero-particle" key={index} style={{left:x,top:y,width:size,height:size,animationDelay:delay}} />)}
                <span className="circuit circuit-one" /><span className="circuit circuit-two" /><span className="circuit circuit-three" />
            </div>
            <div className="hero-content">
                <div className="hero-copy">
                    <span className="hero-eyebrow">{t.banner.eyebrow}</span>
                    <h1>{t.banner.titleBefore} <span>{t.banner.titleHighlight}</span> {t.banner.titleAfter}</h1>
                    <p className="hero-description">{t.banner.description}</p>
                    <div className="hero-phrase" aria-live="polite"><span className="hero-phrase-mark">&gt;_</span><span key={phraseIndex} className="hero-phrase-text">{t.banner.phrases[phraseIndex]}</span></div>
                    <div className="hero-actions">
                        <Link to="/projects" className="hero-btn hero-btn-primary">{t.banner.projectsButton} <span>↗</span></Link>
                        <Link to="/contact" className="hero-btn hero-btn-secondary">{t.banner.contactButton}</Link>
                    </div>
                </div>
                <div className="hero-visual" aria-label="Retrato de Donovan Bueno">
                    <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-dot orbit-dot-one" /><div className="orbit-dot orbit-dot-two" />
                    <div className="portrait-coin" style={{transform:`rotateY(${rotation}deg)`,...(isMobile?{width:"clamp(280px, 78vw, 390px)"}:{})}}>
                        <div className="coin-face coin-front"><div className="portrait-image" role="img" aria-label="Foto de Donovan Bueno" /></div>
                        <div className="coin-face coin-back"><span className="coin-code">&lt;/&gt;</span><strong>DONOVAN</strong><small>BUILD · LEARN · EVOLVE</small></div>
                    </div>
                    <div className="visual-label visual-label-top">{t.banner.tech}</div><div className="visual-label visual-label-bottom">{t.banner.progress}</div>
                </div>
            </div>
            <div className="hero-scroll-hint" aria-hidden="true"><span>{t.banner.scroll}</span><i /></div>
        </section>
    );
}
export default Banner;
