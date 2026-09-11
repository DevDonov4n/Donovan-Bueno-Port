import { useState } from "react";
import WhatsAppButton from "../components/WhatsappButton/WhatsappButton";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useLanguage } from "../context/useLanguage.js";
import "./Contact.css";

function Contact() {
    const { t } = useLanguage();
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "6adf56a0-314a-456d-af69-0f19e77cb60f");
        const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
        const data = await response.json();
        setResult(data.success ? t.contact.success : t.contact.error);
    };
    return (
        <>
            <Header />
            <section className="banner-contact"><h1>{t.pages.contact}</h1></section>
            <h1 id="p-contact">{t.contact.title}<br />{t.contact.subtitle}</h1>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="input-group"><label>{t.contact.name}</label><input type="text" name="name" required /></div>
                    <div className="input-group"><label>{t.contact.email}</label><input type="email" name="email" required /></div>
                </div>
                <div className="input-group"><label>{t.contact.interest}</label><textarea rows="4" name="message" required /></div>
                <button id="button-contact" type="submit">{t.contact.send}</button>
                <p className="contact-result">{result}</p>
            </form>
            <WhatsAppButton />
            <Footer />
        </>
    );
}
export default Contact;
