import React from 'react';
import '../../css/become-tutor/become-tutor.css';

const Characteristics = () => {
  return (
    <div className="become-tutor-characteristics">
      <div className="container">
        <div className="characteristics-container">
          <div className="characteristics-image">
            <img src="/assets/images/tutor-success.png" alt="Successful tutor" />
          </div>
          <div className="characteristics-content">
            <h2>Desirable characteristics ..</h2>
            <div className="characteristics-list">
              <div className="characteristics-list-item">
                <span className="bullet-point">•</span>
                <div>
                  Enthusiastic educator with the ability to encourage and guide students to strive for success.
                </div>
              </div>
              <div className="characteristics-list-item">
                <span className="bullet-point">•</span>
                <div>
                  Excellent communicator with the ability to build rapport with students, parents and members of the Strive Academics team.
                </div>
              </div>
              <div className="characteristics-list-item">
                <span className="bullet-point">•</span>
                <div>
                  Responsible and reliable tutor with great organisational skills. We value the continuity of learning for our students and avoid disruptions.
                </div>
              </div>
              <div className="characteristics-list-item">
                <span className="bullet-point">•</span>
                <div>
                  Flexibility to tutor both in-person and online.
                </div>
              </div>
              <div className="characteristics-list-item">
                <span className="bullet-point">•</span>
                <div>
                  Mentor with current knowledge of the ATAR system and university applications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characteristics; 