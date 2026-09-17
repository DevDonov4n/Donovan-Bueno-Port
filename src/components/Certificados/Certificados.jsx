import "./Certificados.css";
import { useLanguage } from "../../context/useLanguage.js";
import certificadoReactTypescript from "../../assets/Certificado-CERT-1789601473793-2WAQ.pdf";

function Certificados() {
    const { language, t } = useLanguage();
    const certificates = language === "pt" ? [
        { title: "React com Typescript", institution: "Instituto DNC", workload: "12 horas", date: "15/09/2026", image: "/Certificados/react-typescript.svg", pdf: certificadoReactTypescript },
        { title: "React", institution: "Instituto DNC", workload: "10 horas", date: "04/04/2026", image: "/Certificados/react.png", pdf: "/Certificados/react.pdf" },
        { title: "Javascript Avançado", institution: "Instituto DNC", workload: "8 horas", date: "04/01/2026", image: "/Certificados/javascript-avancado.png", pdf: "/Certificados/javascript-avancado.pdf" },
        { title: "HTML e CSS", institution: "Instituto DNC", workload: "10 horas", date: "03/08/2025", image: "/Certificados/html-css.png", pdf: "/Certificados/html-css.pdf" },
    ] : [
        { title: "React with TypeScript", institution: "DNC Institute", workload: "12 hours", date: "15/09/2026", image: "/Certificados/react-typescript.svg", pdf: certificadoReactTypescript },
        { title: "React", institution: "DNC Institute", workload: "10 hours", date: "04/04/2026", image: "/Certificados/react.png", pdf: "/Certificados/react.pdf" },
        { title: "Advanced JavaScript", institution: "DNC Institute", workload: "8 hours", date: "04/01/2026", image: "/Certificados/javascript-avancado.png", pdf: "/Certificados/javascript-avancado.pdf" },
        { title: "HTML and CSS", institution: "DNC Institute", workload: "10 hours", date: "03/08/2025", image: "/Certificados/html-css.png", pdf: "/Certificados/html-css.pdf" },
    ];
    return <section className="certificates"><div className="certificates-title"><h2>{t.about.certificates}</h2></div><div className="certificates-grid">{certificates.map((certificate,index)=><article className="certificate-card" key={index}><div className="certificate-image"><img src={certificate.image} alt={`${certificate.title} certificate`} /></div><div className="certificate-content"><h3>{certificate.title}</h3><h4>{certificate.institution}</h4><span>{certificate.workload} · {certificate.date}</span><a href={certificate.pdf} target="_blank" rel="noopener noreferrer">{language === "pt" ? "Ver certificado" : "View certificate"}</a></div></article>)}</div></section>;
}
export default Certificados;
