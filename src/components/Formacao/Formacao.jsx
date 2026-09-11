import "./Formacao.css";
import { useLanguage } from "../../context/useLanguage.js";

function Formation() {
    const { language, t } = useLanguage();
    const formations = language === "pt" ? [
        { title: "Tecnólogo em Desenvolvimento de Software Multiplataforma", institution: "FATEC — Faculdade de Tecnologia do Estado de São Paulo", period: "Cursando — 1º semestre de 6", description: "Formação voltada ao desenvolvimento de aplicações multiplataforma, abrangendo programação, desenvolvimento web, banco de dados e engenharia de software.", topics: ["Desenvolvimento de aplicações multiplataforma", "Desenvolvimento Web", "Banco de Dados", "Engenharia de Software"] },
        { title: "Técnico em Desenvolvimento de Sistemas", institution: "ETEC Professor Carmine Biagio Tundisi", period: "2022 — 2024", topics: ["Desenvolvimento Web e Mobile", "Back-end e Front-end", "Banco de Dados", "Sistemas Embarcados com Arduino", "Análise de Dados"] },
        { title: "Engenharia de Software", institution: "Instituto DNC", period: "2025 — Atualmente", topics: ["Landing Pages", "Lista de Tarefas", "Dashboard Financeiro", "Bot de Monitoramento de Redes Comerciais"] }
    ] : [
        { title: "Technology Degree in Multiplatform Software Development", institution: "FATEC — São Paulo State Technology College", period: "Currently studying — 1st of 6 semesters", description: "Education focused on multiplatform application development, including programming, web development, databases and software engineering.", topics: ["Multiplatform application development", "Web Development", "Databases", "Software Engineering"] },
        { title: "Technical Degree in Systems Development", institution: "ETEC Professor Carmine Biagio Tundisi", period: "2022 — 2024", topics: ["Web and Mobile Development", "Back-end and Front-end", "Databases", "Embedded Systems with Arduino", "Data Analysis"] },
        { title: "Software Engineering", institution: "DNC Institute", period: "2025 — Present", topics: ["Landing Pages", "Task List", "Financial Dashboard", "Commercial Network Monitoring Bot"] }
    ];
    return <section className="formation"><div className="formation-title"><h2>{t.about.formation}</h2></div><div className="formation-list">{formations.map((formation,index)=><article className="formation-card" key={index}><div className="formation-number">{String(index+1).padStart(2,"0")}</div><div className="formation-content"><h3>{formation.title}</h3><h4>{formation.institution}</h4><span className="formation-period">{formation.period}</span>{formation.description && <p>{formation.description}</p>}<ul>{formation.topics.map((topic,i)=><li key={i}>{topic}</li>)}</ul></div></article>)}</div></section>;
}
export default Formation;
