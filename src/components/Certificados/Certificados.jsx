import "./Certificados.css";

function Certificados() {

    const certificates = [
        {
            title: "React",
            institution: "Instituto DNC",
            workload: "10 horas",
            date: "04/04/2026",
            image: "/Certificados/react.png",
            pdf: "/Certificados/react.pdf",
        },

        {
            title: "Javascript Avançado",
            institution: "Instituto DNC",
            workload: "8 horas",
            date: "04/01/2026",
            image: "/Certificados/javascript-avancado.png",
            pdf: "/Certificados/javascript-avancado.pdf",
        },

        {
            title: "HTML e CSS",
            institution: "Instituto DNC",
            workload: "10 horas",
            date: "03/08/2025",
            image: "/Certificados/html-css.png",
            pdf: "/Certificados/html-css.pdf",
        },
    ];


    return (
        <section className="certificates">

            <div className="certificates-title">
                <h2>Certificados</h2>
            </div>

            <div className="certificates-grid">

                {certificates.map((certificate, index) => (

                    <article
                        className="certificate-card"
                        key={index}
                    >

                        <div className="certificate-image">

                            <img
                                src={certificate.image}
                                alt={`Certificado de ${certificate.title}`}
                            />

                        </div>


                        <div className="certificate-content">

                            <h3>{certificate.title}</h3>

                            <h4>{certificate.institution}</h4>

                            <span>
                                {certificate.workload} · {certificate.date}
                            </span>

                            <a
                                href={certificate.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver certificado
                            </a>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default Certificados;