import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";

import './Projects.css'


function Projects() {
    return (
        <>
            <Header />
            <section className="banner-projects">
                <h1>Projetos</h1>
            </section>
            <ProjectsGrid />
            <Footer />
        </>
    );
}

export default Projects;