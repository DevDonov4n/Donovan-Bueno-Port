import { useState } from "react";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./Contact.css";

function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append(
            "access_key",
            "6adf56a0-314a-456d-af69-0f19e77cb60f"
        );

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        setResult(
            data.success
                ? "Mensagem enviada com sucesso!"
                : "Ocorreu um erro ao enviar a mensagem."
        );
    };

    return (
        <>
            <Header />

            <section className="banner-contact">
                <h1>Contato</h1>
            </section>

            <h1 id="p-contact"> Caso tenha se interessado em meu perfíl e queira contratar um novo desenvolvedor<br></br> Entre em contato! </h1>

            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="input-group">
                        <label>Nome *</label>
                        <input 
                            type="text"
                            name="name"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Email *</label>
                        <input 
                            type="email"
                            name="email"
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <label>Tenho interesse em...</label>
                    <textarea 
                        rows="4"
                        name="message"
                        required
                    
                    />
                </div>

                <button 
                    id="button-contact"
                    type="submit"
                >Send Now →</button>

                <p className="contact-result">
                    {result}
                </p>
            </form>
            <WhatsAppButton/>
            <Footer />
        </>
    );
}

export default Contact;
