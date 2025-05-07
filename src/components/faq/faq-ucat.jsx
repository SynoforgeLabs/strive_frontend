import "../../css/faq/faq-ucat.css";

function Ucat() {

    return (
        <section
            className="row container-fluid section d-flex g-0 z-index-0 faq-ucat-main"
            id="faq-ucat-main"
        >
            <div className="row col-9 d-flex faq-ucat-sec">
                <h1 className="fw-bold d-flex faq-ucat-main-h">
                UCAT
                </h1>

                <div class="accordion d-flex gap-3" id="faq-ucat-accordians-main">
                    <div class="accordion-item" id="faq-ucat-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-ucat-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseucat1"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseucat1"
                            >
                                How can I get started?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseucat1"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            You can get started by filling this form. <br /><br />
                            Once we establish a group of at least 4, and no more than 8 students, we will get the free academic skills consultation organised!<br /><br />
                            Once the free academic skills consultation is complete, you will start having weekly sessions with your group and expert tutor! <br /><br />

                            Please note: the free academic skills consultation will not be offered if you are joining an existing group. 
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-ucat-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-ucat-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseucat2"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseucat2"
                            >
                                What will I need for sessions?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseucat2"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            You will need access to the Medify questionbank - the gold standard for UCAT questions. While we have no affiliation with Medify, we know that their questionbank closely represents the standard of questions on the UCAT exam.<br /><br />
                            You can purchase Medify using the following link: <strong><a href="https://www.medify.com.au/ucat">https://www.medify.com.au/ucat</a></strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-ucat-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-ucat-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseucat3"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseucat3"
                            >
                                How do payments work?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseucat3"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            You will never be charged before a session is completed. For the first lesson with your tutor, you will receive an invoice. Please ensure that this invoice is paid within 48 hours.<br /><br />
                            You can make payment via credit/debit card, Google/Apple Pay or direct debit. We do not accept other payment methods.<br /><br />
                            For sessions thereafter, your card will be charged automatically after each lesson. Stripe’s secure payment system handles all payments. Once your fees have been received, the tutor is paid immediately.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-ucat-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-ucat-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseucat4"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseucat4"
                            >
                                I would prefer private sessions. How can I organise them?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseucat4"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            We understand that some students work best when they have 1-on-1 tutor support. <br /><br />
                            You can get started with private sessions for UCAT preparation by finding a tutor - please filter by subject - UCAT and select a suitable tutor. <br /><br />
                            Once you contact the tutor you select, they will then schedule a free academic skills consultation and once you complete this, you’re all set to start sessions!
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}

export default Ucat;
