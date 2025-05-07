import "../../css/faq/faq-ip.css";

function Ip() {

    return (
        <section
            className="row container-fluid section d-flex g-0 z-index-0 faq-ip-main"
            id="faq-ip-main"
        >
            <div className="row col-9 d-flex faq-ip-sec">
                <h1 className="fw-bold d-flex faq-ip-main-h">
                Interview Preparation
                </h1>

                <div class="accordion d-flex gap-3" id="faq-ip-accordians-main">
                    <div class="accordion-item" id="faq-ip-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-ip-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseip1"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseip1"
                            >
                                How do I get started?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseip1"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            You can get started by filling out this form to confirm attendance in our interview preparation workshops.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-ip-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-ip-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseip2"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseip2"
                            >
                                What do you offer?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseip2"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            We offer a series of 5 workshops that equip you will the skills you need to excel in both Multiple Mini Interview (MMI) and Panel medical/dental interviews. These sessions run on a fortnightly basis according to the schedule above at 10AM - 1PM AEST. All sessions run via Zoom.
                            <br /><br />
                            We then offer mock interviews on a one-on-one basis.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-ip-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-ip-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseip3"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseip3"
                            >
                                How many students are in each workshop?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseip3"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            To ensure you will receive targeted and tailored support, student numbers are capped at a maximum of 12 per workshop.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-ip-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-ip-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseip4"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseip4"
                            >
                                How do payments work?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseip4"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            You will never be charged before a session is completed. For the first lesson with your tutor, you will receive an invoice. Please ensure that this invoice is paid within 48 hours.
                            <br /><br />
                            You can make payment via credit/debit card, Google/Apple Pay or direct debit. We do not accept other payment methods.
                            <br /><br />
                            For sessions thereafter, your card will be charged automatically after each lesson. Stripe’s secure payment system handles all payments. Once your fees have been received, the tutor is paid immediately.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-ip-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-ip-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseip5"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseip5"
                            >
                                Does the Bring a Friend and Save offer apply to interview preparation workshops?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseip5"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            The Bring a Friend and Save offer only applies to sessions organised by following the steps outlined on the Bring a Friend and Save page. 
                            <br /><br />
                            If you would like to complete the workshops in smaller groups with friends, please note that we only offer interview preparation in the Premium and Elite Tiers, which means you will have to select a tutor from these two tiers and then follow the steps for Bring a Friend and Save. 
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-ip-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-ip-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseip6"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseip6"
                            >
                                How do Mock Interviews run?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseip6"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                            Mock interviews run on a one-on-one basis following interview preparation workshops. Each mock interview includes a 20 minute period to assess your responses to general questions and scenarios, and then a 10 minute period to provide targeted and actionable feedback.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}

export default Ip;
