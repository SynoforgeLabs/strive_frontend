import '../../css/snippets/site-stat.css';

function Sitestat() {
  return (
    <section
      className="row container-fluid section d-flex g-0 z-index-0"
      id="site-stat"
    >
      <div className="row col-8 d-flex gap-5 site-stat-sec">
        <h1 className="fw-bold d-flex stite-stat-main-h">
          We believe that to be the best, you have to learn from the best!
        </h1>
        <div className="row site-stat-comp-main">
          <div className="container d-flex s-stat-comp">
            <span className="fw-bold s-stat-no">9999</span>
            <h3 className="fw-light s-stat-h">Average Tutor Score</h3>
          </div>
          <div className="container d-flex s-stat-comp">
            <span className="fw-bold gap-3 s-stat-no">
              6000{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(255, 58, 58)"
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </span>
            <h3 className="fw-light s-stat-h">Hours of Experience</h3>
          </div>
          <div className="container d-flex s-stat-comp">
            <span className="fw-bold gap-3 s-stat-no">
              4000{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(255, 58, 58)"
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </span>
            <h3 className="fw-light s-stat-h">Completed Lessons</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sitestat;
