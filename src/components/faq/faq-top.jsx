import "../../css/faq/faq-top.css";

function Faqtop() {
    return (
        <section className="row container-fluid section d-flex g-0 z-index-0 faq-top-main" id="faq-top">
            <div className="row col-9 d-flex faq-top-sec">
                <h1 className="fw-bold faq-top-main-h">Frequently Asked Questions</h1>
                <div className="row d-flex gap-3 faq-top-q-main">
                    <div class="accordion col-5" id="faq-top-q-1">
                        <div class="accordion-item" id="faq-top-ac-item">
                            <h2 class="accordion-header">
                            <button class="btn primary-button fw-bold w-100 faq-top-q" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Payment Policy
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion col-5" id="faq-top-q-2">
                        <div class="accordion-item" id="faq-top-ac-item">
                            <h2 class="accordion-header">
                            <button class="btn primary-button fw-bold w-100 faq-top-q" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo" id="faq-top-q-2">
                            Cancellation Policy
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </section>
    );
}

export default Faqtop;
