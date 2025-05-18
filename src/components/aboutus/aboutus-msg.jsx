import '../../css/aboutus/aboutus-msg.css'


function  Msg() {
    return (

        <section className="row container-fluid section d-flex g-0 z-index-0 abouts-msg-main" id='aboutus-msg'>
            <div className="row col-9 aboutus-msg-sec">

                <h1 className="fw-bold aboutus-msg-h">Message from the Founder</h1>
                
                <div className="row">
                    <div className="col-md-8">
                        <div className="aboutus-content">
                            <p>Welcome to Strive Academics! I'm Pasindu, the founder of this platform and a medical student with over five years of tutoring experience and a passion for teaching. Having worked with students from all backgrounds, I've seen first hand the struggles they face—whether it's tackling difficult subjects, preparing for competitive exams, or just finding the right study approach. I know how much of a difference personalized support can make, which is why I started Strive Academics—to connect students with the best tutors who can guide, motivate, and help them reach their full potential.</p> 

                            <p>We believe that quality education is a pillar for success and that every student has unique strengths. Our approach is designed to nurture their potential through personalized tutoring tailored to their learning style. To be the best, you have to learn from the best—that's why we only hire the top 3% of tutors, ensuring that our students receive guidance from highly qualified educators with proven expertise.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <div className="aboutus-founder-img-container">
                            <img src="/Images/Aboutus/dp.png" alt="Founder of Strive Academics" className="aboutus-founder-img" />
                        </div>
                    </div>
                </div>
                
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="aboutus-content">
                            <p>Beyond academics, we understand the pressures of school, and our tutors are strong advocates for mental health, providing not just academic support, but also encouragement and motivation. At Strive Academics, we are here to support you every step of the way—whether it's getting into a competitive university program like medicine, turning a B grade into an A+, or simply building confidence in your studies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Msg