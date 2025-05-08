import React, { useState } from 'react';
import "../../css/joinus/joinus-end.css";
import JoinusForm from './joinus-form';

function JoinusEnd() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    return (
        <section className="row container-fluid section d-flex g-0 joinus-end-main" id="joinus-end">
            <div className="row col-lg-10 col-sm-12 d-flex joinus-end-sec">
                <h1 className="joinus-end-heading">Ready to join our Team?</h1>
                <button className="btn btn-primary mt-4 joinus-end-btn" onClick={openForm}>Apply Now !</button>
            </div>
            
            {/* Render the Form Component */}
            <JoinusForm isOpen={isFormOpen} onClose={closeForm} />
        </section>
    );
}

export default JoinusEnd;
