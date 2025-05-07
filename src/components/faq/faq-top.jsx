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
                            <button class="btn primary-button fw-bold w-100 faq-top-q m-0" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Payment Policy
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>There are several important policies outlines in our Terms and Conditions. As a Student or Tutor at Strive Academics, you agree to all terms set out in our Terms and Conditions.</p>

                                <p>Here are a summary of 3 important policies:</p>

                                <h5 class="fw-bold">Payment Policy</h5>
                                <ul class="ps-4">
                                    <li>You only pay for lessons after they happen.</li>
                                    <li>The first lesson is invoiced via email and needs to be paid within 3 days (credit card or direct debit).</li>
                                    <li>After that, payments are automatic (immediately after lesson completion and tutor confirmation).</li>
                                    <li>You'll get a receipt for each payment.</li>
                                    <li>Late payments are subject to fees and potential debt collection.
                                        <ul class="ps-4">
                                            <li>$30 late fee after 14 days.</li>
                                            <li>Debt collection agency after 28 days.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion col-5" id="faq-top-q-2">
                        <div class="accordion-item" id="faq-top-ac-item">
                            <h2 class="accordion-header">
                            <button class="btn primary-button fw-bold w-100 faq-top-q m-0" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo" id="faq-top-q-2">
                            Cancellation Policy
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <h5 class="fw-bold">Cancellation Policy</h5>
                                <ul class="ps-4">
                                    <li>Lessons are considered final once arranged: This applies to both in-person and online sessions.</li>
                                    <li>Notify immediately if you need to cancel: Regardless of the reason, you must inform the tutor as soon as possible.</li>
                                    <li>Cancellation fees apply:
                                        <ul class="ps-4">
                                            <li>50% fee if notice is less than 24 hours and reason is not acceptable (see below).</li>
                                            <li>No fee if notice is more than 1 hour and reason is acceptable (see below).</li>
                                        </ul>
                                    </li>
                                    <li>Acceptable reasons for cancellation and reschedule (without fee):
                                        <ul class="ps-4">
                                            <li>Tutor cancels or is absent.</li>
                                            <li>You are sick with a doctor's note.</li>
                                            <li>You have an important and urgent un-reschedulable appointment.</li>
                                            <li>You need to be in court.</li>
                                            <li>You and the tutor agree to cancel without charge.</li>
                                            <li>Unforeseen event that takes priority over the lesson.</li>
                                        </ul>
                                    </li>
                                    <li>Unacceptable reasons for cancellation (full fee applies):
                                        <ul class="ps-4">
                                            <li>You are late (including due to transport issues).</li>
                                            <li>You have a foreseeable event that could be rescheduled (except court appearances).</li>
                                            <li>You miss the lesson due to poor planning.</li>
                                            <li>You have other work or study commitments.</li>
                                            <li>You don't show up without explanation.</li>
                                        </ul>
                                    </li>
                                    <li>Insufficient notice (even with acceptable reason) incurs a fee: You must give at least 1 hour notice, or the cancellation fee applies.</li>
                                    <li>Immediate notice is important: Even with an acceptable reason, if the late notice significantly inconveniences the tutor, you may still be charged.</li>
                                </ul>
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
