import React from 'react';
import "../../css/tutor/tutor-info.css";
import { useContactForm } from '../../components/snippets/snippets-index';

function TutorInfo() {
    const { openContactForm } = useContactForm();

    const handleConsultationClick = () => {
        openContactForm();
    };

    return (
        <section className="row container-fluid section d-flex justify-content-center g-0 tutor-info-main" id="tutor-info">
            <div className="row col-lg-10 col-md-11 col-sm-12 d-flex tutor-info-sec">
                
            <div className="col-lg-12 col-md-12 col-sm-12 g-0">
                    <div className="row g-4">
                        {/* About Me Section */}
                        <div className="col-lg-6 col-md-12">
                            <div className="tutor-info-card h-100">
                                <h2 className="tutor-info-title">ABOUT ME</h2>
                                <p className="tutor-info-text">
                                    Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam.
                                </p>
                            </div>
                        </div>

                        {/* Video Section */}
                        <div className="col-lg-6 col-md-12">
                            <div className="tutor-info-card h-100 d-flex flex-column justify-content-center align-items-center">
                                <h2 className="tutor-info-title text-center mb-4">Introduction video</h2>
                                <div className="tutor-info-video-placeholder">
                                    {/* Video placeholder - replace with actual video component */}
                                    <div className="ratio ratio-16x9">
                                        <iframe 
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                            title="Introduction Video"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Available Locations Section */}
                        <div className="col-lg-4 col-md-6">
                            <div className="tutor-info-card h-100">
                                <h2 className="tutor-info-title">AVAILABLE LOCATIONS</h2>
                                <ul className="tutor-info-list">
                                    <li>Online</li>
                                    <li>Tingalpa</li>
                                    <li>Camp hill</li>
                                    <li>Buderim</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tutoring Subjects Section */}
                        <div className="col-lg-4 col-md-6">
                            <div className="tutor-info-card h-100">
                                <h2 className="tutor-info-title">MY TUTORING SUBJECTS</h2>
                                <ul className="tutor-info-list">
                                    <li>IB Chemistry HL Year 11-12</li>
                                    <li>IB Biology HL Year 11-12</li>
                                    <li>IB Biology SL Year 11-12</li>
                                    <li>Maths Year 5-10</li>
                                    <li>Science Year 5-10</li>
                                    <li>Maths Year 1-4</li>
                                    <li>Mathematics Applications Year 11-12</li>
                                </ul>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="col-lg-4 col-md-12">
                            <div className="tutor-info-card h-100">
                                <h2 className="tutor-info-title">EDUCATION</h2>
                                <div className="tutor-info-education">
                                    <div className="mb-4">
                                        <h3 className="tutor-info-subtitle">I went to school at</h3>
                                        <p className="tutor-info-text">Queensland Academy for Science, Mathematics and Technology</p>
                                    </div>
                                    <div>
                                        <h3 className="tutor-info-subtitle">I'm Currently Studying</h3>
                                        <p className="tutor-info-text">Medicine</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="col-12 mt-4">
                            <div className="tutor-info-card">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    {/* Years of Experience */}
                                    <div className="col">
                                        <div className="tutor-info-stat text-center">
                                            <div className="tutor-info-stat-number">3 Years</div>
                                            <div className="tutor-info-stat-label">Years of experience</div>
                                        </div>
                                    </div>

                                    {/* Lessons Completed */}
                                    <div className="col">
                                        <div className="tutor-info-stat text-center">
                                            <div className="tutor-info-stat-number">82</div>
                                            <div className="tutor-info-stat-label">Lessons Completed</div>
                                        </div>
                                    </div>

                                    {/* Tutor Training */}
                                    <div className="col">
                                        <div className="tutor-info-stat text-center">
                                            <div className="tutor-info-stat-number text-warning">Completed</div>
                                            <div className="tutor-info-stat-label">Tutor Training Handbook</div>
                                        </div>
                                    </div>

                                    {/* Working With Children */}
                                    <div className="col">
                                        <div className="tutor-info-stat text-center">
                                            <div className="tutor-info-stat-number text-warning">Completed</div>
                                            <div className="tutor-info-stat-label">Working With Children Check</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Consultation Button */}
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="d-flex align-items-center flex-wrap gap-3">
                                            <button 
                                                className="tutor-info-consultation-btn"
                                                onClick={handleConsultationClick}
                                            >
                                                Book free academic consultation
                                            </button>
                                            <small className="tutor-info-consultation-note">
                                                * No payment details required until after consultation
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default TutorInfo;