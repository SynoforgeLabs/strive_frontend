import { useState, useRef, useEffect } from "react";
import "../../css/find-tutor/findt-tutors.css"

function FindtTutors() {
    const tutors = [
        {
            id: 1,
            name: "Enola Holmes",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            status: "Available",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 2,
            name: "John Watson",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            status: "Booked",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 3,
            name: "Sarah Parker",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            status: "Available",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 4,
            name: "Michael Chen",
            image: "https://randomuser.me/api/portraits/men/4.jpg",
            status: "Booked",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 5,
            name: "Emma Wilson",
            image: "https://randomuser.me/api/portraits/women/5.jpg",
            status: "Available",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 6,
            name: "James Thompson",
            image: "https://randomuser.me/api/portraits/men/6.jpg",
            status: "Booked",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 7,
            name: "Sofia Rodriguez",
            image: "https://randomuser.me/api/portraits/women/7.jpg",
            status: "Available",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 8,
            name: "David Kim",
            image: "https://randomuser.me/api/portraits/men/8.jpg",
            status: "Booked",
            goldPoints: "250/5",
            atrPoints: "96.45"
        }
    ];

    return (
        <section className='row container-fluid d-flex g-0 findt-tutors-main' id='findt-tutors'>
            <div className="col-lg-8 col-sm-12 mx-sm-0 mx-lg-auto d-flex findt-tutors-sec">
                <div className="row g-4 w-100">
                    {tutors.map((tutor) => (
                        <div key={tutor.id} className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="findt-tutors-card">
                                <div className="findt-tutors-stats">
                                    <span className="findt-tutors-gold">Gold ({tutor.goldPoints})</span>
                                    <span className="findt-tutors-atr">ATR ({tutor.atrPoints})</span>
                                </div>
                                <div className={`findt-tutors-avatar ${tutor.status.toLowerCase()}`}>
                                    <img src={tutor.image} alt={tutor.name} />
                                    <span className="findt-tutors-status">{tutor.status}</span>
                                </div>
                                <h3 className="findt-tutors-name">{tutor.name}</h3>
                                <p className="findt-tutors-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lectus et velit interdum.
                                </p>
                                <button className="findt-tutors-book-btn w-100 fw-bold">Book</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FindtTutors;