import "../../css/contact-us/contactus-faq.css";

function ContactusFaq() {

    return (
        <section
            className="row container-fluid section d-flex g-0 z-index-0 contactus-faq-main"
            id="contactus-faq-main"
        >
            <div className="row col-9 d-flex contactus-faq-sec">
                <h1 className="fw-bold d-flex contactus-faq-main-h">
                    FAQ
                </h1>

                <div class="accordion d-flex gap-3" id="contactus-faq-accordians-main">
                    <div class="accordion-item" id="contactus-faq-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 contactus-faq-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs1"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapsebfs1"
                            >
                                How can I update my payment method?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs1"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                                To update your payment method, log in to your account and go to the Payment Settings section.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="contactus-faq-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 contactus-faq-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs2"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapsebfs2"
                            >
                                I have forgotten the password to my account. What can I do?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs2"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            To reset your password, go to the login page and click "Forgot Password". Enter your email address and follow the subsequent instructions. 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}

export default ContactusFaq;
