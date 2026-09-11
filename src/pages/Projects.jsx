import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import { useLanguage } from "../context/useLanguage.js";
import './Projects.css'

function Projects() {
    const { t } = useLanguage();
    return (
        <>
            <Header />
            <section className="banner-projects"><h1>{t.pages.projects}</h1></section>
            <ProjectsGrid />
            <Footer />
        </>
    );
}
export default Projects;
