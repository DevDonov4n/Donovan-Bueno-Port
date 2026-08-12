import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

function WhatsAppButton() {

    const phone = "5511914730589";

    const message = encodeURIComponent(
        "Olá Donovan! Vim pelo seu portfólio e gostaria de conversar com você."
    );

    return (
        <a
            className="whatsapp-button"
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato pelo WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
}

export default WhatsAppButton;