import "./Certificados.css";
import { useLanguage } from "../../context/useLanguage.js";

function Certificados() {
    const { language, t } = useLanguage();
    const certificates = [
        {
            title: language === "pt" ? "Desenvolvedor Front-End" : "Front-End Developer",
            institution: "Escola DNC",
            workload: language === "pt" ? "108 horas" : "108 hours",
            date: "27/10/2026",
            image: "/Certificados/desenvolvedor-front-end.svg",
            preview: "/Certificados/desenvolvedor-front-end.svg"
        },
        {
            title: language === "pt" ? "Banco de dados: SQL e MongoDB" : "Database: SQL and MongoDB",
            institution: "Escola DNC",
            workload: language === "pt" ? "10 horas" : "10 hours",
            date: "15/11/2026",
            image: "/Certificados/sql-mongodb.svg",
            preview: "/Certificados/sql-mongodb.svg"
        },
        {
            title: language === "pt" ? "Fundamentos de Node.js" : "Node.js Fundamentals",
            institution: "Escola DNC",
            workload: language === "pt" ? "14 horas" : "14 hours",
            date: "27/10/2026",
            image: "/Certificados/nodejs-fundamentos.svg",
            preview: "/Certificados/nodejs-fundamentos.svg"
        },
        {
            title: "React com TypeScript",
            institution: language === "pt" ? "Instituto DNC" : "DNC Institute",
            workload: language === "pt" ? "12 horas" : "12 hours",
            date: "15/09/2026",
            image: "/Certificados/reactTS.png",
            preview: "/Certificados/reactTS.pdf"
        },
        {
            title: "React",
            institution: language === "pt" ? "Instituto DNC" : "DNC Institute",
            workload: language === "pt" ? "10 horas" : "10 hours",
            date: "04/04/2026",
            image: "/Certificados/react.png",
            preview: "/Certificados/react.pdf"
        },
        {
            title: language === "pt" ? "JavaScript Avançado" : "Advanced JavaScript",
            institution: language === "pt" ? "Instituto DNC" : "DNC Institute",
            workload: language === "pt" ? "8 horas" : "8 hours",
            date: "04/01/2026",
            image: "/Certificados/javascript-avancado.png",
            preview: "/Certificados/javascript-avancado.pdf"
        },
        {
            title: "HTML e CSS",
            institution: language === "pt" ? "Instituto DNC" : "DNC Institute",
            workload: language === "pt" ? "10 horas" : "10 hours",
            date: "03/08/2025",
            image: "/Certificados/html-css.png",
            preview: "/Certificados/html-css.pdf"
        },
        {
            title: language === "pt" ? "CAPACITA+: Construa com o Gemini" : "CAPACITA+: Build with Gemini",
            institution: "Google Cloud",
            workload: language === "pt" ? "2 horas" : "2 hours",
            date: "25/09/2026",
            image: "/Certificados/Certificado-Capacita.png",
            preview: "/Certificados/Certificado-Capacita.pdf"
        }
    ];

    return (
        <section className="certificates">
            <div className="certificates-title"><h2>{t.about.certificates}</h2></div>
            <div className="certificates-grid">
                {certificates.map((certificate, index) => (
                    <article className="certificate-card" key={certificate.title}>
                        <div className="certificate-image">
                            <img src={certificate.image} alt={`${certificate.title} certificate`} />
                        </div>
                        <div className="certificate-content">
                            <h3>{certificate.title}</h3>
                            <h4>{certificate.institution}</h4>
                            <span>{certificate.workload} · {certificate.date}</span>
                            {certificate.preview && (
                                <a href={certificate.preview} target="_blank" rel="noopener noreferrer">
                                    {language === "pt" ? "Ver certificado" : "View certificate"}
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Certificados;
