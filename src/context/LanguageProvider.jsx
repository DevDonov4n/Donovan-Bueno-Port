import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const translations = {
    pt: {
        nav: { home: "Início", about: "Sobre", projects: "Projetos", contact: "Contato", downloadResume: "Baixar currículo" },
        banner: {
            eyebrow: "DESENVOLVEDOR DE SOFTWARE",
            titleBefore: "Eu transformo", titleHighlight: "ideias", titleAfter: "em experiências digitais.",
            description: "Sou Donovan Bueno, estudante de Desenvolvimento de Software Multiplataforma, apaixonado por tecnologia e por construir soluções que realmente resolvem problemas.",
            phrases: ["Transformo problemas em soluções digitais.", "Código limpo, organizado e pensado para crescer.", "Aprendo rápido e gosto de transformar ideias em produtos.", "Comprometimento, curiosidade e foco em resultado.", "Pronto para evoluir junto com o seu time."],
            projectsButton: "Ver meus projetos", contactButton: "Vamos conversar", tech: "REACT · JAVASCRIPT · TYPESCRIPT", progress: "FULL STACK IN PROGRESS", scroll: "SCROLL"
        },
        pages: { about: "Sobre Mim", projects: "Projetos", contact: "Contato" },
        about: {
            hello: "Olá Mundo!", intro: "Eu me chamo", description1: "Sou estudante de Desenvolvimento de Software Multiplataforma na FATEC e apaixonado por tecnologia e desenvolvimento de software.", description2: "Atualmente, estou aprimorando meus conhecimentos em JavaScript, React, TypeScript, Next.js e Node.js, criando projetos e buscando evoluir cada vez mais como desenvolvedor.", description3: "Meu objetivo é transformar o que aprendo em soluções reais, continuar crescendo na área e conquistar minha primeira oportunidade como estagiário em desenvolvimento de software.", experience: "Experiência Profissional", formation: "Formação", certificates: "Certificados"
        },
        contact: { title: "Caso tenha se interessado em meu perfil e queira contratar um novo desenvolvedor", subtitle: "Entre em contato!", name: "Nome *", email: "Email *", interest: "Tenho interesse em...", send: "Enviar →", success: "Mensagem enviada com sucesso!", error: "Ocorreu um erro ao enviar a mensagem." },
        footer: { pages: "Páginas", contact: "Contato", home: "Home" },
    },
    en: {
        nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", downloadResume: "Download resume" },
        banner: {
            eyebrow: "SOFTWARE DEVELOPER", titleBefore: "I turn", titleHighlight: "ideas", titleAfter: "into digital experiences.",
            description: "I'm Donovan Bueno, a Multiplatform Software Development student, passionate about technology and building solutions that truly solve problems.",
            phrases: ["I turn problems into digital solutions.", "Clean, organized code designed to scale.", "I learn fast and enjoy turning ideas into products.", "Commitment, curiosity and focus on results.", "Ready to grow with your team."],
            projectsButton: "View my projects", contactButton: "Let's talk", tech: "REACT · JAVASCRIPT · TYPESCRIPT", progress: "FULL STACK IN PROGRESS", scroll: "SCROLL"
        },
        pages: { about: "About Me", projects: "Projects", contact: "Contact" },
        about: {
            hello: "Hello World!", intro: "My name is", description1: "I'm a Multiplatform Software Development student at FATEC, passionate about technology and software development.", description2: "I'm currently improving my skills in JavaScript, React, TypeScript, Next.js and Node.js by building projects and continuously growing as a developer.", description3: "My goal is to turn what I learn into real solutions, keep growing in the field and earn my first opportunity as a software development intern.", experience: "Professional Experience", formation: "Education", certificates: "Certificates"
        },
        contact: { title: "If you're interested in my profile and would like to hire a new developer", subtitle: "Get in touch!", name: "Name *", email: "Email *", interest: "I'm interested in...", send: "Send →", success: "Message sent successfully!", error: "An error occurred while sending the message." },
        footer: { pages: "Pages", contact: "Contact", home: "Home" },
    },
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || "pt");
    useEffect(() => localStorage.setItem("language", language), [language]);
    const toggleLanguage = () => setLanguage((current) => current === "pt" ? "en" : "pt");
    return <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>;
}
