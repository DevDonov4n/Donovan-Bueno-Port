import "../ProjectsGrid/ProjectsGrid.css"
import { DiJsBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
//ASSETS
import theDevNews from "../../assets/the-dev-news.png";
import boardTarefas from "../../assets/board-tarefas.png";
import landingPageDNC from "../../assets/landing-page-dnc.png";
import picExemplar from "../../assets/image.png";
import toDoList from "../../assets/to-do-list.png";


function ProjectsGrid(){
    return(
        <>
        <section className="projects-section">
            <div className="projects-intro">
                <h1 id='projects-title'>Projetos Desenvolvidos</h1>
                <div id="projects-p">
                    Em minha caminhada, desde então venho realizando alguns projetos utilizando

                    <div className="language-tags">
                        <span className="language-tag">
                            <DiJsBadge /> JavaScript
                        </span>

                        <span className="language-tag">
                            <FaReact /> React.JS
                        </span>

                        <span className="language-tag">
                            <FaHtml5 /> HTML
                        </span>

                        <span className="language-tag">
                            <FaCss3Alt /> CSS
                        </span>

                        <span className="language-tag">
                            <SiTypescript /> TypeScript
                        </span>
                         e outras tecnologias.
                    </div> 
                    
                </div>
            </div>
            <section className="projects">
    <div className="container">
        

        <div className="projects-grid">

            <div className="card-projects">
                <img src={theDevNews} className="img-projects" alt="" />
                <h3 className="card-title">BLOG - The Dev News</h3>
                <p>Uma landing page para o portal The Dev News, desenvolvida com HTML, CSS. O obejetivo deste projeto é apresentar as notícias do universo da programação de forma atrativa e informativa e responsiva.</p>
                <div className="language-tags">
                    <span className="language-tag">
                        <DiJsBadge /> JavaScript
                    </span>

                    <span className="language-tag">
                        <FaHtml5 /> HTML
                    </span>

                    <span className="language-tag">
                        <FaCss3Alt /> CSS
                    </span>
                </div>
                <button className="card-btn">Ver Projeto <BsArrowUpRight /></button>
            </div>

            <div className="card-projects">
                <img src={boardTarefas} className="img-projects" alt="" />
                <h3 className="card-title">Board de Tarefas</h3>
                <p>Um projeto de board de tarefas desenvolvido com HTML, CSS e JavaScript, utilizando conceitos de Local Storage, mudança de estado e componentização.</p>
                <div className="language-tags">
                    <span className="language-tag">
                        <DiJsBadge /> JavaScript
                    </span>

                    <span className="language-tag">
                        <FaHtml5 /> HTML
                    </span>

                    <span className="language-tag">
                        <FaCss3Alt /> CSS
                    </span>
                </div>
                <button className="card-btn">Ver Projeto <BsArrowUpRight /></button>
            </div>

            <div className="card-projects">
                <img src={landingPageDNC} className="img-projects" alt="" />
                <h3 className="card-title">Landing Page - DNC</h3>
                <p>Uma landing page para a instituição DNC, desenvolvida com HTML, CSS e JavaScript. O objetivo deste projeto é apresentar os cursos e serviços da instituição de forma atrativa e informativa.</p>
                <div className="language-tags">
                    <span className="language-tag">
                        <FaHtml5 /> HTML
                    </span>

                    <span className="language-tag">
                        <FaCss3Alt /> CSS
                    </span>
                </div>
                <button className="card-btn">Ver Projeto <BsArrowUpRight /></button>
            </div>

            <div className="card-projects">
                <img src={toDoList} className="img-projects" alt="" />
                <h3 className="card-title">To-Do List</h3>
                <p>Uma lista de tarefas desenvolvida com HTML, CSS e JavaScript, utilizando conceitos de Local Storage, mudança de estado e código assíncrono.</p>
                <div className="language-tags">
                    <span className="language-tag">
                        <DiJsBadge /> JavaScript
                    </span>

                    <span className="language-tag">
                        <FaHtml5 /> HTML
                    </span>

                    <span className="language-tag">
                        <FaCss3Alt /> CSS
                    </span>
                </div>
                <button className="card-btn">Ver Projeto <BsArrowUpRight /></button>
            </div>

            <div className="card-projects">
                <img src={picExemplar} className="img-projects" alt="" />
                <h3 className="card-title">Em Desenvolvimento...</h3>
                <p>Descrição</p>
                <button className="card-btn">Ver Projeto <BsArrowUpRight /></button>
            </div>

            <div className="card-projects">
                <img src={picExemplar} className="img-projects" alt="" />
                <h3 className="card-title">Em Desenvolvimento...</h3>
                <p>Descrição</p>
                <button className="card-btn">Ver Projeto <BsArrowUpRight /></button>
            </div>

        </div>
    </div>
</section>
        </section>

        
        </>
    )
}

export default ProjectsGrid;