import "../../css/aboutus/aboutus-end.css"

function Aboutend() {
    return (

        <section className='row container-fluid d-flex g-0 about-us-end-main' id='aboutus_end'>

            <div className="col-8 d-flex aboutus-end-sec">

                <h1 className="row fw-bold aboutus-end-main-h">
                    Why Choose Us ?
                </h1>
                <span className="row fw-semibold aboutus-end-des">
                With decades of experience among our tutors, we know how to help you strive for your personal best.
                </span>

                <p className="row col-10 aboutus-end-slogan">
                <span className="fw-bold aboutus-end-slogan-bold">Strive for your Personal Best.</span>  Get started with one of our stellar tutors now! Find a Tutor now
                </p>

                <div class="col-12 d-flex gap-5 aboutus-end-btn-grp">
                    <button type="button" class="col-4 btn btn-outline-primary border-3 fw-semibold aboutus-end-btn" id="aboutus-end-btn-1">Private Tutoring</button>
                    <button type="button" class="col-4 btn btn-outline-primary border-3 fw-semibold aboutus-end-btn" id="aboutus-end-btn-2">Bring a Friend and Save</button>
                    <button type="button" class="col-4 btn btn-outline-primary border-3 fw-semibold aboutus-end-btn" id="aboutus-end-btn-3">Interview Preparation</button>
                </div>

            </div>

        </section>

    );
}

export default Aboutend