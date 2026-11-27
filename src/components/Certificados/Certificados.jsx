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
            image: "/Certificados/front-end.png",
            preview: "/Certificados/front-end.pdf"
        },
        {
            title: language === "pt" ? "Nest e Next.js" : "Nest and Next.js",
            institution: "Escola DNC",
            workload: language === "pt" ? "24 horas" : "24 hours",
            date: "26/11/2026",
            image: "/Certificados/NEST-NEXT.png",
            preview: "/Certificados/NEST-NEXT.pdf"
        },
        {
            title: language === "pt" ? "Integração de API Rest com Nest.js" : "Integration of Rest API with Nest.js",
            institution: "Escola DNC",
            workload: language === "pt" ? "10 horas" : "10 hours",
            date: "15/11/2026",
            image: "/Certificados/API-REST-NEST.png",
            preview: "/Certificados/API-REST-NEST.pdf"
        },
        {
            title: language === "pt" ? "Banco de dados: SQL e MongoDB" : "Database: SQL and MongoDB",
            institution: "Escola DNC",
            workload: language === "pt" ? "10 horas" : "10 hours",
            date: "15/11/2026",
            image: "/Certificados/SQL-MONGO.png",
            preview: "/Certificados/SQL-MONGO.pdf"
        },
        {
            title: language === "pt" ? "Fundamentos de Node.js" : "Node.js Fundamentals",
            institution: "Escola DNC",
            workload: language === "pt" ? "14 horas" : "14 hours",
            date: "27/10/2026",
            image: "/Certificados/node-js.png",
            preview: "/Certificados/node-js.pdf"
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
                {certificates.map((certificate) => (
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
