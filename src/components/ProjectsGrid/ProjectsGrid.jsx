import { useState } from "react";
import "../ProjectsGrid/ProjectsGrid.css";
import { DiJsBadge } from "react-icons/di";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMysql, SiPostgresql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsFill } from "react-icons/ri";
import { BsArrowUpRight } from "react-icons/bs";
import { IoConstruct } from "react-icons/io5";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// ASSETS
import theDevNews from "../../assets/the-dev-news.png";
import theDevNewsGif from "../../assets/the-dev-news.gif";
import boardTarefas from "../../assets/board-tarefas.png";
import boardTarefasGif from "../../assets/board-tarefas-gif.gif";
import landingPage from "../../assets/landing-page.png";
import landingPageGif from "../../assets/landing-page.gif";
import toDoList from "../../assets/to-do-list.png";
import jrlingeries from "../../assets/jr-lingeries.png";

const techStack = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <DiJsBadge /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <VscVscode /> },
];

const projects = [
    {
        title: "BLOG - The Dev News",
        description: "Uma landing page para o portal The Dev News, desenvolvida com HTML e CSS. O objetivo deste projeto é apresentar as notícias do universo da programação de forma atrativa, informativa e responsiva.",
        images: [theDevNews, theDevNewsGif],
        technologies: [
            { name: "JavaScript", icon: <DiJsBadge /> },
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
        ],
    },
    {
        title: "Board de Tarefas",
        description: "Um projeto de board de tarefas desenvolvido com HTML, CSS e JavaScript, utilizando conceitos de Local Storage, mudança de estado e componentização.",
        images: [boardTarefas, boardTarefasGif],
        technologies: [
            { name: "JavaScript", icon: <DiJsBadge /> },
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
        ],
    },
    {
        title: "Landing Page ",
        description: "Uma landing page para a instituição DNC, desenvolvida com HTML, CSS e JavaScript. O objetivo deste projeto montar a landing page com integração ao Sheet Monkey",
        images: [landingPage, landingPageGif],
        technologies: [
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
        ],
    },
    {
        title: "JR Lingeries",
        description: "Um e-commerce de roupas íntimas com login para clientes e dashboard para o responsável acompanhar leads, estoque e renda mensal arrecadada.",
        images: [jrlingeries],
        building: true,
        technologies: [
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Next.js", icon: <RiNextjsFill /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
        ],
    },
];

function ProjectCarousel({ images, title }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [touchStart, setTouchStart] = useState(null);

    const previousImage = () => {
        if (images.length < 2) return;
        setCurrentImage((current) => (current === 0 ? images.length - 1 : current - 1));
    };

    const nextImage = () => {
        if (images.length < 2) return;
        setCurrentImage((current) => (current === images.length - 1 ? 0 : current + 1));
    };

    const handleTouchStart = (event) => {
        setTouchStart(event.touches[0].clientX);
    };

    const handleTouchEnd = (event) => {
        if (touchStart === null || images.length < 2) return;

        const touchEnd = event.changedTouches[0].clientX;
        const distance = touchStart - touchEnd;

        if (Math.abs(distance) > 50) {
            if (distance > 0) nextImage();
            else previousImage();
        }

        setTouchStart(null);
    };

    return (
        <div
            className="project-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <img
                src={images[currentImage]}
                className="img-projects"
                alt={`Preview do projeto ${title}`}
            />

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className="carousel-arrow carousel-arrow-left"
                        onClick={previousImage}
                        aria-label="Imagem anterior"
                    >
                        <FiChevronLeft />
                    </button>

                    <button
                        type="button"
                        className="carousel-arrow carousel-arrow-right"
                        onClick={nextImage}
                        aria-label="Próxima imagem"
                    >
                        <FiChevronRight />
                    </button>

                    <div className="carousel-dots" aria-label="Navegação das imagens">
                        {images.map((_, index) => (
                            <button
                                type="button"
                                key={index}
                                className={`carousel-dot ${index === currentImage ? "active" : ""}`}
                                onClick={() => setCurrentImage(index)}
                                aria-label={`Ir para imagem ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function TechStackCarousel() {
    const [isPaused, setIsPaused] = useState(false);

    const togglePause = () => {
        setIsPaused((paused) => !paused);
    };

    const renderTechnologies = (isDuplicate = false) => (
        <div
            className="tech-stack-track"
            aria-hidden={isDuplicate}
        >
            {techStack.map((technology) => (
                <button
                    type="button"
                    className="tech-stack-item"
                    key={`${technology.name}-${isDuplicate ? "duplicate" : "original"}`}
                    title={`${technology.name} — ${isPaused ? "Clique para continuar" : "Clique para pausar"}`}
                    aria-label={`${technology.name}. ${isPaused ? "Clique para continuar o carrossel" : "Clique para pausar o carrossel"}`}
                    onClick={togglePause}
                >
                    <span className="tech-stack-icon">{technology.icon}</span>
                    <span className="tech-stack-name">{technology.name}</span>
                </button>
            ))}
        </div>
    );

    return (
        <div
            className={`tech-stack-carousel ${isPaused ? "is-paused" : ""}`}
            aria-label="Carrossel de tecnologias"
        >
            <div className="tech-stack-track-wrapper">
                <div className="tech-stack-track-group">
                    {renderTechnologies()}
                    {renderTechnologies(true)}
                </div>
            </div>
        </div>
    );
}

function ProjectsGrid() {
    return (
        <section className="projects-section">
            <div className="projects-intro">
                <h1 id="projects-title">Projetos Desenvolvidos</h1>
                <p id="projects-p">
                    Em minha caminhada, venho realizando alguns projetos utilizando diferentes
                    tecnologias e colocando em prática meus conhecimentos de desenvolvimento.
                </p>
            </div>

            <section className="tech-stack" aria-labelledby="tech-stack-title">
                <div className="tech-stack-header">
                    <span className="tech-stack-line" />
                    <h2 id="tech-stack-title">🚀 Tech Stack</h2>
                </div>

                <TechStackCarousel />
            </section>

            <section className="projects">
                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="card-projects" key={project.title}>
                            <ProjectCarousel images={project.images} title={project.title} />
                            <h3 className="card-title">{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="language-tags">
                                {project.building && (
                                    <span className="language-tag-building">
                                        <IoConstruct /> Em desenvolvimento
                                    </span>
                                )}

                                {project.technologies.map((technology) => (
                                    <span className="language-tag" key={technology.name}>
                                        {technology.icon} {technology.name}
                                    </span>
                                ))}
                            </div>

                            <button type="button" className="card-btn">
                                Ver Projeto <BsArrowUpRight />
                            </button>
                        </article>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default ProjectsGrid;
