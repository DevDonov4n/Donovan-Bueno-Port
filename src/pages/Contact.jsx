import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./Contact.css";

function Contact() {
    return (
        <>
            <Header />

            <section className="banner-contact">
                <h1>Contato</h1>
            </section>

            <h1 id="p-contact">We love meeting new people and helping them.</h1>

            <form>
                <div className="row">
                    <div className="input-group">
                        <label>Name *</label>
                        <input type="text" required />
                    </div>

                    <div className="input-group">
                        <label>Email *</label>
                        <input type="email" required />
                    </div>
                </div>

                <div className="input-group">
                    <label>Hello Iam Intrested in..</label>
                    <textarea rows="4" />
                </div>

                <button id="button-contact" type="submit">Send Now →</button>
            </form>

            <Footer />
        </>
    );
}

export default Contact;
