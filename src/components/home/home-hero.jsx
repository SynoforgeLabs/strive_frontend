import "../../css/home/home-hero.css"

function Hero() {
  return (
    <section
      className="row container-fluid d-flex g-0"
      id="home_hero"
    >

      <div className="hero-sec col-8 d-flex">
        
        <div className="row col-lg-12 col-md-12 d-flex gap-4 hero-text-col">
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

      </div>
    </section>
  );
}

export default Hero;
