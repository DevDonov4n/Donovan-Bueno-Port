import "./Formacao.css";

function Formation() {
    const formations = [
        {
            title: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
            institution: "FATEC — Faculdade de Tecnologia do Estado de São Paulo",
            period: "Cursando — 1º semestre de 6",
            description:
                "Formação voltada ao desenvolvimento de aplicações multiplataforma, abrangendo programação, desenvolvimento web, banco de dados e engenharia de software.",
            topics: [
                "Desenvolvimento de aplicações multiplataforma",
                "Desenvolvimento Web",
                "Banco de Dados",
                "Engenharia de Software",
            ],
        },

        {
            title: "Técnico em Desenvolvimento de Sistemas",
            institution: "ETEC Professor Carmine Biagio Tundisi",
            period: "2022 — 2024",
            topics: [
                "Desenvolvimento Web e Mobile",
                "Back-end e Front-end",
                "Banco de Dados",
                "Sistemas Embarcados com Arduino",
                "Análise de Dados",
            ],
        },

        {
            title: "Engenharia de Software",
            institution: "Instituto DNC",
            period: "2025 — Atualmente",
            topics: [
                "Landing Pages",
                "Lista de Tarefas",
                "Dashboard Financeiro",
                "Bot de Monitoramento de Redes Comerciais",
            ],
        },
    ];

    return (
        <section className="formation">
            <div className="formation-title">
                <h2>Formação</h2>
            </div>

            <div className="formation-list">
                {formations.map((formation, index) => (
                    <article className="formation-card" key={index}>

                        <div className="formation-number">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="formation-content">

                            <h3>{formation.title}</h3>

                            <h4>{formation.institution}</h4>

                            <span className="formation-period">
                                {formation.period}
                            </span>

                            {formation.description && (
                                <p>{formation.description}</p>
                            )}

                            <ul>
                                {formation.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex}>
                                        {topic}
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </article>
                ))}
            </div>
        </section>
    );
}

export default Formation;