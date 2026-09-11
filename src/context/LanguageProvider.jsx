import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const translations = {
    pt: {
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato",
        downloadResume: "Baixar currículo",
    },
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        downloadResume: "Download resume",
    },
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || "pt");

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((current) => current === "pt" ? "en" : "pt");
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}
