import "./Experiencia.css";
import { useLanguage } from "../../context/useLanguage.js";

function Experiencia() {
    const { language, t } = useLanguage();
    const experiences = language === "pt" ? [
        {
            period: "Set/2026 — Atual",
            company: "ESSITY",
            role: "Jovem Aprendiz — Logística",
            description: "Atuação em rotinas operacionais em ambiente multinacional, utilizando sistemas de gestão (ERP) para controle e organização de processos logísticos. Apoio na análise de dados, otimização do fluxo de informações e busca por eficiência nas operações diárias."
        },
        {
            period: "2026 — 08/2026",
            company: "VILLANET TELECOM",
            role: "Back Office II",
            description: "Atuação em Back Office com foco em suporte técnico, realizando diagnóstico de conectividade, análise de falhas e acionamento de equipes. Apoio a demandas administrativas e financeiras, garantindo eficiência e qualidade no atendimento."
        },
        {
            period: "2025 — 2026",
            company: "DROGARIA PARANÁ",
            role: "Auxiliar de Escritório",
            description: "Responsável pelo gerenciamento do estoque do estabelecimento, conferência de notas fiscais e organização do setor."
        }
    ] : [
        {
            period: "Sep/2026 — Present",
            company: "ESSITY",
            role: "Logistics Apprentice",
            description: "Support for operational routines in a multinational environment, using enterprise resource planning (ERP) systems to control and organize logistics processes. Assisting with data analysis, information-flow optimization and day-to-day operational efficiency."
        },
        {
            period: "2026 — Aug/2026",
            company: "VILLANET TELECOM",
            role: "Back Office II",
            description: "Worked in Back Office with a focus on technical support, connectivity diagnosis, failure analysis and team coordination. Supported administrative and financial demands, ensuring efficiency and service quality."
        },
        {
            period: "2025 — 2026",
            company: "DROGARIA PARANÁ",
            role: "Office Assistant",
            description: "Responsible for inventory management, invoice checking and organization of the sector."
        }
    ];
    return <section className="experience"><div className="experience-title"><h2>{t.about.experience}</h2></div><div className="experience-list">{experiences.map((experience,index)=><article className="experience-card" key={experience.company}><div className="experience-number">{String(index+1).padStart(2,"0")}</div><div className="experience-content"><span className="experience-period">{experience.period}</span><h3>{experience.company}</h3><h4>{experience.role}</h4><p>{experience.description}</p></div></article>)}</div></section>;
}
export default Experiencia;
