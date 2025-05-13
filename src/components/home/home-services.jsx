import "../../css/home/home-services.css"

function Services() {
  return (

    <section
      className="row container-fluid section d-flex g-0 z-index-0"
      id="home_services"
    >
      <div className="row d-fex g-0 service-main">
        <div className="col-8 g-0 d-flex service-main-t">
          <h1 className="fw-bold service-main-h">Private Tutoring</h1>
          <span className="col-7 text-right fw-light service-des">
            At Strive Academics, excellence meets expertise. Our team consists
            of top-performing tutors with proven track records of success. We
            meticulously select the{" "}
            <span className="des-bold">top 3% of ATAR scorers </span>and{" "}
            <span className="des-bold">tutors that ranked #1 in subjects</span>{" "}
            from across Australia, guaranteeing unmatched quality in our
            tutoring services. With a focus on personalised attention and
            tailored learning strategies, we’re dedicated to helping you achieve
            your academic goals and unlock your full potential.
          </span>
        </div>

        <div className="row col-8 d-flex g-0 service-sub-main">
          <div className="col-6 service-sub-l-col">
            <div className="col-12 d-flex g-0 service-sub-con">
              <div className="d-flex service-sub-h-main">
                <div className="p-3 service-sub-h-icn-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24} 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-eyeglass-2 service-sub-h-icn"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 4h-2l-3 10v2.5" />
                    <path d="M16 4h2l3 10v2.5" />
                    <path d="M10 16l4 0" />
                    <path d="M17.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
                    <path d="M6.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
                  </svg>
                </div>
                <h4 className="fw-bold service-sub-h">
                  Free Academic Consultation
                </h4>
              </div>
              <p className="col-11 fw-light offset-1 d-flex service-sub-con">
                Click “Find a Tutor” to connect with a tutor from our stellar
                team. Plus, enjoy a complimentary 30-minute FREE Academic
                Consultation. No strings attached, no questions asked. It’s our
                way of ensuring you receive tailored support hassle-free from a
                tutor that gets you.
              </p>
            </div>
            <div className="col-12 d-flex g-0 service-sub-con">
              <div className="d-flex service-sub-h-main">
                <div className="p-3 service-sub-h-icn-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-book service-sub-h-icn"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6l0 13" />
                    <path d="M12 6l0 13" />
                    <path d="M21 6l0 13" />
                  </svg>
                </div>
                <h4 className="fw-bold service-sub-h">Expert Tutors</h4>
              </div>
              <p className="col-11 fw-light offset-1 d-flex service-sub-con">
                Our tutors embody academic excellence. They have achieved
                stellar scores (top 3% ATAR or ranked no.1 in subjects) and
                possess extensive tutoring experience. Many of them are current
                medical students!
              </p>
            </div>
            <div className="col-12 d-flex g-0 service-sub-con">
              <div className="d-flex service-sub-h-main">
                <div className="p-3 service-sub-h-icn-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brush service-sub-h-icn"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                    <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
                    <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
                    <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                  </svg>
                </div>
                <h4 className="fw-bold service-sub-h">Personalised Approach</h4>
              </div>
              <p className="col-11 fw-light offset-1 d-flex service-sub-con">
                We understand that every student is unique. That's why we tailor
                our tutoring sessions to meet your individual needs, learning
                style, and pace.
              </p>
            </div>
          </div>
          <div className="col-6 d-flex service-sub-r-col">
            <img
              src="/Images/site-images/home/home1.jpeg"
              className="private-tutoring-img "
              alt=""
            />
            <img
              src="/Images/site-images/home/home1.jpeg"
              className="private-tutoring-img private-tutoring-2 "
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="row d-fex g-0 service-main">
        <div className="col-8 g-0 d-flex service-main-t">
          <h1 className="col-7 fw-bold offset-5 service-main-h">
            Bring a Friend and Save!
          </h1>
          <span className="col-7 offset-5 text-right fw-light service-des">
            Unlock the power of group learning with our exclusive Bring-a-Friend
            offer! Enjoy a fantastic 12.5% discount when you and your friend
            book tutoring sessions together, whether it’s for $60, $80, or $120
            packages. Plus, bring two friends along, and save more with a 25%
            discount on your tutoring sessions. Don’t miss out on this
            incredible opportunity to save while you learn and succeed together.
            Join our tutoring marketplace now and elevate your learning
            experience with friends by your side!
          </span>
        </div>

        <div className="row col-8 d-flex g-0 service-sub-main">
          <div className="col-6 d-flex service-sub-r-col">
            <img
              src="/Images/site-images/home/home2.jpg"
              className="bfs-img bfs-img-2"
              alt=""
            />
            <img
              src="/Images/site-images/home/home2.jpg"
              className="bfs-img"
              alt=""
            />
          </div>
          <div className="col-6 service-sub-l-col">
            <div className="col-12 d-flex g-0 service-sub-con">
              <div className="d-flex service-sub-h-main">
                <div className="p-3 service-sub-h-icn-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-eyeglass-2 service-sub-h-icn"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 4h-2l-3 10v2.5" />
                    <path d="M16 4h2l3 10v2.5" />
                    <path d="M10 16l4 0" />
                    <path d="M17.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
                    <path d="M6.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
                  </svg>
                </div>
                <h4 className="fw-bold service-sub-h">
                  Learn Together, Save Together
                </h4>
              </div>
              <p className="col-11 fw-light offset-1 d-flex service-sub-con">
                The more friends you bring, the more you save. This means you
                can get the same high-quality tutoring at a discounted rate,
                making it more affordable for everyone involved.
              </p>
            </div>
            <div className="col-12 d-flex g-0 service-sub-con">
              <div className="d-flex service-sub-h-main">
                <div className="p-3 service-sub-h-icn-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-book service-sub-h-icn"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6l0 13" />
                    <path d="M12 6l0 13" />
                    <path d="M21 6l0 13" />
                  </svg>
                </div>
                <h4 className="fw-bold service-sub-h">Peer Support</h4>
              </div>
              <p className="col-11 fw-light offset-1 d-flex service-sub-con">
                Having friends to learn with provides a built-in support system.
                You can discuss concepts, ask questions, and celebrate successes
                together, making the learning process more engaging and
                effective.
              </p>
            </div>
            <div className="col-12 d-flex g-0 service-sub-con">
              <div className="d-flex service-sub-h-main">
                <div className="p-3 service-sub-h-icn-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brush service-sub-h-icn"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                    <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
                    <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
                    <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                  </svg>
                </div>
                <h4 className="fw-bold service-sub-h">
                  Commitment-Free Learning
                </h4>
              </div>
              <p className="col-11 fw-light offset-1 d-flex service-sub-con">
                We believe in transparency and flexibility which means no
                lock-in contracts! Enjoy the flexibility of our tutoring
                services without the worry of long-term commitments. You can
                easily adjust your tutoring schedule as needed, ensuring that
                your learning experience always aligns with your evolving goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Services;