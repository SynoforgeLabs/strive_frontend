import '../../css/aboutus/aboutus-hero.css'

function Hero() {
    return (

        <section className='row container-fluid d-flex g-0 about-us-her-main' id='aboutus_hero'>
                       
            <div className="col-8 row d-flex g-0 aboutus-hero-top">
                <img src="/Images/logo/logo1.png" className='aboutus-strive-logo' alt="" />
                <h1 className='fs-1 fw-bold d-flex aboutus-hero-main-h'>Welcome to Strive Academics</h1>
                <h4 className="fs-4 fw-semibold d-flex mt-3 aboutus-hero-sub-h">Where we help students for success</h4>   
            </div>

        </section>

    );
}

export default Hero;