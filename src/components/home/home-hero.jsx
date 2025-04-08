import "../../css/home/home-hero.css"

function Hero() {
  return (
    <section
      className="row container-fluid d-flex g-0"
      id="home_hero"
    >

      {/* <div className="hero-img-container">
        <div className="row"><img src="./Images/Home/Hero/hero-t.png" className="hero-bg-img hero-bg-t-img" alt="" />
        </div>
        <div className="row hero-bg-img1-main">
        <img src="./Images/Home/Hero/hero-b.png" className="hero-bg-img hero-bg-b-img" alt="" />
        </div>
        
      </div> */}

      <div className="hero-sec col-8 d-flex">
        
        <div className="row col-lg-7 col-md-12 d-flex gap-4 hero-text-col">
          {/* <div className="img"></div> */}
          <h1 className="col-10 fw-bold hero-main-h">
            Welcome to Strive Academics!
          </h1>
          <span className="col-7 hero-sub-h">
            Strive to achieve your personal best and unlock your full academic
            potential.
          </span>
          <div className="d-flex gap-4 hero-btns-main">
            <button
              type="button"
              className="btn btn-primary hero-btns"
              id="hero-ft-btn"
            >
              Find a Tutor
            </button>
            <button
              type="button"
              className="btn btn-outline-primary hero-btns"
              id="hero-lau-btn"
            >
              Learn about us
            </button>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 col-sm-12 d-flex hero-img-main">
          <img
            src="/Images/Home/Hero/hero-img.png"
            className="hero-img"
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
