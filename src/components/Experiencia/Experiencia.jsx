import "./Experiencia.css";

function Experiencia() {

    const experiences = [
        {
            period: "2025 — 2026",
            company: "DROGARIA PARANÁ",
            role: "Auxiliar de Escritório",
            description:
                "Responsável pelo gerenciamento do estoque do estabelecimento, conferência de notas fiscais e organização do setor.",
        },

        {
            period: "2026 — 08/2026",
            company: "VILLANET TELECOM",
            role: "Back Office II",
            description:
                "Atuação em Back Office com foco em suporte técnico, realizando diagnóstico de conectividade, análise de falhas e acionamento de equipes. Apoio a demandas administrativas e financeiras, garantindo eficiência e qualidade no atendimento.",
        },
    ];

    return (
        <section className="experience">

            <div className="experience-title">
                <h2>Experiência Profissional</h2>
            </div>

            <div className="experience-list">

                {experiences.map((experience, index) => (

                    <article
                        className="experience-card"
                        key={index}
                    >

                        <div className="experience-number">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="experience-content">

                            <span className="experience-period">
                                {experience.period}
                            </span>

                            <h3>
                                {experience.company}
                            </h3>

                            <h4>
                                {experience.role}
                            </h4>

                            <p>
                                {experience.description}
                            </p>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default Experiencia;