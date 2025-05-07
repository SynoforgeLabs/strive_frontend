import "../../css/faq/faq-bfs.css";

function Bfs() {

    return (
        <section
            className="row container-fluid section d-flex g-0 z-index-0 faq-bfs-main"
            id="faq-bfs-main"
        >
            <div className="row col-9 d-flex faq-bfs-sec">
                <h1 className="fw-bold d-flex faq-bfs-main-h">
                    Bring a Friend and Save
                </h1>

                <div class="accordion d-flex gap-3" id="faq-bfs-accordians-main">
                    <div class="accordion-item" id="faq-bfs-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-bfs-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs1"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapsebfs1"
                            >
                                How does Bring a Friend and Save work?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs1"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                                <strong>All you need to do is follow these steps:</strong>
                                <br /><br />
                                <ol>
                                    <li>Find a Tutor - reach out to a suitable tutor to request tutoring. We have limited spots available - lock it in early!</li>
                                    <li>Confirm that your friends would like to receive tutoring with you and fill out this <a href="#">form</a>.</li>
                                    <li>Have your free academic consultation together and then start sessions! <strong>You'll receive lessons as a group at a discounted rate (12.5% off per friend you bring along!)</strong></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-bfs-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-bfs-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs2"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapsebfs2"
                            >
                                How will I receive my 30-minute free academic consultation?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs2"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                                You will engage in your 30-minute free academic consultation as a group.
                                <br /><br />
                                The 30-minute free academic consultation is an opportunity for you to meet your tutor, agree upon how you would like sessions to run, and plan for success.
                                <br /><br />
                                Content is not covered during this session, as its purpose is to facilitate future sessions.
                                <br /><br />
                                The 30-minute free academic consultation is compulsory as it is essential to ensure that you and your friend(s) have been matched to a suitable tutor.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-bfs-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-bfs-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs3"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapsebfs3"
                            >
                                Are your tutors qualified?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs3"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                                Absolutely! We believe that to be the best, you must learn from the best. For this reason, only hire tutors with ATAR results in the top 3% across Australia (our average tutor ATAR is well above 99). To ensure that tutors are qualified, experienced, and reliable, they must get through a rigorous interview process. We are confident that our tutors are amazing tutors and even better people.
                                <br /><br />
                                All tutors are also required to have current Working with Children's Checks in line with our Terms and Conditions.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-bfs-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-bfs-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs4"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapsebfs4"
                            >
                                How do payments work?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs4"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                                You will never be charged before a session is completed. For the first lesson with your tutor, you will receive an invoice. Please ensure that this invoice is paid within 48 hours.
                                <br /><br />
                                You can make payment via credit/debit card, Google/Apple Pay or direct debit. We do not accept other payment methods.
                                <br /><br />
                                For sessions thereafter, your card will be charged automatically after each lesson. Stripe's secure payment system handles all payments. Once your fees have been received, the tutor is paid immediately.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-bfs-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-bfs-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs5"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapsebfs5"
                            >
                                I have already started bfs tutoring sessions, can I bring a friend to future sessions?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs5"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                                Absolutely! If you fill out this form and let your tutor know, we will add your friend(s) to the group and adjust your fees accordingly.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-bfs-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-bfs-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs6"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapsebfs6"
                            >
                                Does the subject have to be the same when I bring a friend?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs6"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                                Unless both the students and the tutor are in agreement to be taught two different subjects (even if they are related), we recommend sticking to the same subject so that you get more targeted support.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-bfs-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-bfs-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs7"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapsebfs7"
                            >
                                How much will my lesson cost?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs7"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                                <strong>You can save up to 37.5% depending on how many friends join you in sessions. If you bring 1 friend, you save 12.5% each. If you bring 2 friends, you save 25% each. If you bring 3 friends, you will save 37.5% each.</strong>
                                <br /><br />
                                What this looks like:
                                <br /><br />
                                <strong>Gold ($60/hr private sessions)</strong>
                                <br />
                                Bring 1 Friend: $52.5 each per hour
                                <br />
                                Bring 2 Friends: $45 each per hour
                                <br />
                                Bring 3 Friends: $37.5 each per hour
                                <br /><br />
                                <strong>Premium ($80/hr private sessions)</strong>
                                <br />
                                Bring 1 Friend: $70 each per hour
                                <br />
                                Bring 2 Friends: $60 each per hour
                                <br />
                                Bring 3 Friends: $50 each per hour
                                <br /><br />
                                <strong>Elite ($120/hr private sessions)</strong>
                                <br />
                                Bring 1 Friend: $105 each per hour
                                <br />
                                Bring 2 Friends: $90 each per hour
                                <br />
                                Bring 3 Friends: $75 each per hour
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-bfs-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-bfs-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs8"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapsebfs8"
                            >
                                How will I communicate with my tutor?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs8"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                                Communication between you, your group, and your tutor will be using whatever works best for you!
                                <br /><br />
                                This can be via text message, email or any suitable messaging application.
                                <br /><br />
                                Tutors will primarily maintain contact with students, however if you are the parents of young children that are receiving tutoring at Strive Academics, tutors can also reach out to you directly.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" id="faq-bfs-ac-item">
                        <h2 class="accordion-header">
                            <button
                                class="btn primary-button d-flex fw-bold w-100 faq-bfs-q"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsebfs9"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapsebfs9"
                            >
                                Will I be able to cancel sessions if needed?
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapsebfs9"
                            class="accordion-collapse collapse"
                        >
                            <div class="accordion-body">
                                We completely understand that life can get in the way sometimes, and some sessions may need to be cancelled or rescheduled. We recommend rescheduling if possible as this enables continuity of learning which is extremely important.
                                <br /><br />
                                If you do need to cancel a session, please let your tutor know directly. Please do keep in mind that we have a Cancellation Policy,  and we have a 50% fee if notice is less than 24 hours and reason is not acceptable (see Cancellation Policy in our Terms and Conditions ).
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}

export default Bfs;
