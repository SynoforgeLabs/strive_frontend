import { useState, useRef, useEffect } from "react";
import "../../css/find-tutor/findt-tutors.css"

function FindtTutors() {
    const [currentPage, setCurrentPage] = useState(1);
    const [tutorsPerPage] = useState(8);

    // This would typically come from an API
    const tutors = [
        {
            id: 1,
            name: "Enola Holmes",
            image: "/path-to-enola-image.jpg",
            status: "Available",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 2,
            name: "John Watson",
            image: "/path-to-john-image.jpg",
            status: "Booked",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 3,
            name: "Enola Holmes",
            image: "/path-to-enola-image.jpg",
            status: "Available",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 4,
            name: "John Watson",
            image: "/path-to-john-image.jpg",
            status: "Booked",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 5,
            name: "John Watson",
            image: "/path-to-john-image.jpg",
            status: "Booked",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 6,
            name: "John Watson",
            image: "/path-to-john-image.jpg",
            status: "Booked",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 7,
            name: "John Watson",
            image: "/path-to-john-image.jpg",
            status: "Booked",
            goldPoints: "250/5",
            atrPoints: "96.45"
        },
        {
            id: 8,
            name: "John Watson",
            image: "/path-to-john-image.jpg",
            status: "Booked",
            goldPoints: "250/5",
            atrPoints: "96.45"
        }
        // Add more tutor data as needed
    ];

    // Get current tutors
    const indexOfLastTutor = currentPage * tutorsPerPage;
    const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;
    const currentTutors = tutors.slice(indexOfFirstTutor, indexOfLastTutor);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(tutors.length / tutorsPerPage);

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <section className='row container-fluid d-flex g-0 findt-tutors-main' id='findt-tutors'>
            <div className="col-8 d-flex findt-tutors-sec">
                <div className="tutor-cards-grid">
                    {currentTutors.map((tutor) => (
                        <div key={tutor.id} className="tutor-card">
                            <div className="tutor-stats">
                                <span className="gold-points">Gold ({tutor.goldPoints})</span>
                                <span className="atr-points">ATR ({tutor.atrPoints})</span>
                            </div>
                            <div className={`tutor-avatar ${tutor.status.toLowerCase()}`}>
                                <img src={tutor.image} alt={tutor.name} />
                                <span className="status-label">{tutor.status}</span>
                            </div>
                            <h3 className="tutor-name">{tutor.name}</h3>
                            <p className="tutor-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lectus et velit interdum, ac aliquet odio mattis.
                            </p>
                            <button className="book-button container-fluid">Book</button>
                        </div>
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="pagination-container">
                        <ul className="pagination">
                            <li 
                                className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
                                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            >
                                &lt;
                            </li>
                            {pageNumbers.map(number => (
                                <li
                                    key={number}
                                    className={`pagination-item ${currentPage === number ? 'active' : ''}`}
                                    onClick={() => paginate(number)}
                                >
                                    {number}
                                </li>
                            ))}
                            <li 
                                className={`pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}
                                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                            >
                                &gt;
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}

export default FindtTutors;