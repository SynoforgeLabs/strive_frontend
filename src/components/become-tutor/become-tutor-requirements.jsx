import React from 'react';
import '../../css/become-tutor/become-tutor.css';

const Requirements = () => {
  return (
    <div className="become-tutor-requirements">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2>We have set criteria and only hire the best tutors across Australia.</h2>
            
            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="requirements-text">
                  <h3 className="what-we-look-for">What we look for ..</h3>
                  <p className="requirements-description">
                    We believe that for our students to be the best, they have to learn from the best. This is why we require all tutors to have:
                  </p>
                  
                  <div className="requirements-list">
                    <div className="requirements-list-item">
                      <span className="bullet-point">•</span>
                      <div>
                        A Top 3%  ATAR (97+).
                      </div>
                    </div>
                    <div className="requirements-list-item">
                      <span className="bullet-point">•</span>
                      <div>
                        Completed  Year 12 in Australia.
                      </div>
                    </div>
                    <div className="requirements-list-item">
                      <span className="bullet-point">•</span>
                      <div>
                        Tutoring  experience
                      </div>
                    </div>
                    <div className="requirements-list-item">
                      <span className="bullet-point">•</span>
                      <div>
                        A  current (paid) Working with Children's Check from the state you  live in.
                      </div>
                    </div>
                    <div className="requirements-list-item">
                      <span className="bullet-point">•</span>
                      <div>
                        Be able  to run both private and small group sessions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="requirements-image">
                  <img src="/assets/images/tutor-checklist.png" alt="Tutor requirements checklist" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements; 