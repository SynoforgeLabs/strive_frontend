import React from 'react';
import "../../css/joinus/joinus-points.css";
import { Groups, TaskAlt, TrendingUp, Handshake, Headset } from '@mui/icons-material';

function JoinusPoints() {
    return (
        <section className="row container-fluid section d-flex g-0 joinus-points-main" id="joinus-points">
            <div className="row col-lg-8 col-sm-12 d-flex joinus-points-sec">
                <h2 className="joinus-points-title text-center mb-5">Perks of Tutoring at Strive Academics</h2>
                
                <div className="joinus-points-grid container-fluid d-flex justify-content-center">
                    <div className="joinus-points-item container-fluid">
                        <div className="joinus-points-icon">
                            <Groups />
                        </div>
                        <div className="joinus-points-content">
                            <h3>Join a Tutor-Friendly Community</h3>
                            <p>We get it. Balancing tutoring with uni, work, and life can be tough. At Strive Academics, we're here to support you every step of the way. Need help juggling commitments? Just reach out to our team!</p>
                        </div>
                    </div>

                    <div className="joinus-points-item">
                        <div className="joinus-points-icon">
                            <TaskAlt />
                        </div>
                        <div className="joinus-points-content">
                            <h3>We Handle the Hassle</h3>
                            <p>No more payment headaches or advertising stress. Our secure system and expert marketing team take care of those details, so you can focus on delivering excellent tutoring.</p>
                        </div>
                    </div>

                    <div className="joinus-points-item">
                        <div className="joinus-points-icon">
                            <TrendingUp />
                        </div>
                        <div className="joinus-points-content">
                            <h3>Unlock Career Opportunities</h3>
                            <p>Mistakes happen, and that's okay. We're committed to backing our tutors and helping you improve. We offer stellar references, support for rental applications, and exciting opportunities to join our management team.</p>
                        </div>
                    </div>

                    <div className="joinus-points-item">
                        <div className="joinus-points-icon">
                            <Handshake />
                        </div>
                        <div className="joinus-points-content">
                            <h3>Join a Thriving Team</h3>
                            <p>Be part of a supportive community of tutors. Enjoy team events, grow your leadership skills, and earn higher rates as you progress.</p>
                        </div>
                    </div>

                    <div className="joinus-points-item">
                        <div className="joinus-points-icon">
                            <Headset />
                        </div>
                        <div className="joinus-points-content">
                            <h3>We're Here to Support You</h3>
                            <p>Mistakes happen, and that's okay. We're committed to backing our tutors and helping you improve.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JoinusPoints;
