import React from 'react';
import "../../css/joinus/joinus-qualities.css";

function JoinusQualities() {
    return (
        <section className="row container-fluid section d-flex g-0 joinus-qualities-main" id="joinus-qualities">
            <div className="row col-lg-10 col-sm-12 d-flex joinus-qualities-sec">
                <div className="row d-flex flex-column">
                    {/* Requirements Column */}
                    <div className="col-12 d-flex justify-content-center joinus-qualitiy">
                        <div className="joinus-qualities-image-right">
                            <img src="https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Objects/Clipboard.png" alt="Requirements checklist" />
                        </div>
                        <div className="joinus-qualities-content ps-lg-5">
                            <h2 className="joinus-qualities-title mb-lg-4">What we look for ..</h2>
                            <p className="joinus-qualities-subtitle mb-4">
                                We believe that for our students to be the best, they have to learn from
                                the best. This is why we require all tutors to have:
                            </p>
                            <ul className="joinus-qualities-list">
                                <li>A Top 3% ATAR (97+).</li>
                                <li>Completed Year 12 in Australia.</li>
                                <li>Tutoring experience</li>
                                <li>A current (paid) Working with Children's Check from the state you live in.</li>
                                <li>Be able to run both private and small group sessions.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Desirable Characteristics Column */}
                    <div className="col-12 d-flex mt-5 justify-content-center joinus-qualitiy">
                        <div className="joinus-qualities-content order-sm-2 order-md-2 order-lg-1">
                            <h2 className="joinus-qualities-title mb-lg-4">Desirable characteristics ..</h2>
                            <ul className="joinus-qualities-list characteristics">
                                <li>
                                    Enthusiastic educator with the ability to encourage and guide
                                    students to strive for success.
                                </li>
                                <li>
                                    Excellent communicator with the ability to build rapport with
                                    students, parents and members of the Strive Academics team.
                                </li>
                                <li>
                                    Responsible and reliable tutor with great organisational skills. We
                                    value the continuity of learning for our students and avoid
                                    disruptions.
                                </li>
                                <li>Flexibility to tutor both in person and online.</li>
                                <li>
                                    Mentor with current knowledge of the ATAR system and
                                    university applications.
                                </li>
                            </ul>
                        </div>
                        <div className="joinus-qualities-image-left order-sm-1 order-md-1 order-lg-2">
                            <img src="https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/People/Person%20Raising%20Hand.png" alt="Happy tutor" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JoinusQualities;
