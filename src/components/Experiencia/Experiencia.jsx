import "./Experiencia.css";
import { useLanguage } from "../../context/useLanguage.js";

function Experiencia() {
    const { language, t } = useLanguage();
    const experiences = language === "pt" ? [
        { period: "2025 — 2026", company: "DROGARIA PARANÁ", role: "Auxiliar de Escritório", description: "Responsável pelo gerenciamento do estoque do estabelecimento, conferência de notas fiscais e organização do setor." },
        { period: "2026 — 08/2026", company: "VILLANET TELECOM", role: "Back Office II", description: "Atuação em Back Office com foco em suporte técnico, realizando diagnóstico de conectividade, análise de falhas e acionamento de equipes. Apoio a demandas administrativas e financeiras, garantindo eficiência e qualidade no atendimento." }
    ] : [
        { period: "2025 — 2026", company: "DROGARIA PARANÁ", role: "Office Assistant", description: "Responsible for inventory management, invoice checking and organization of the sector." },
        { period: "2026 — 08/2026", company: "VILLANET TELECOM", role: "Back Office II", description: "Worked in Back Office with a focus on technical support, connectivity diagnosis, failure analysis and team coordination. Supported administrative and financial demands, ensuring efficiency and service quality." }
    ];
    return <section className="experience"><div className="experience-title"><h2>{t.about.experience}</h2></div><div className="experience-list">{experiences.map((experience,index)=><article className="experience-card" key={index}><div className="experience-number">{String(index+1).padStart(2,"0")}</div><div className="experience-content"><span className="experience-period">{experience.period}</span><h3>{experience.company}</h3><h4>{experience.role}</h4><p>{experience.description}</p></div></article>)}</div></section>;
}
export default Experiencia;
