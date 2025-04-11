import { useState, useRef, useEffect } from "react";
import "../../css/find-tutor/findt-filters.css"

function FindtFilters() {
    // Create separate states and refs for each dropdown
    const [yearDropdown, setYearDropdown] = useState({
        isOpen: false,
        selectedOption: ""
    });
    const [curriculumDropdown, setCurriculumDropdown] = useState({
        isOpen: false,
        selectedOption: ""
    });
    const [subjectDropdown, setSubjectDropdown] = useState({
        isOpen: false,
        selectedOption: ""
    });

    // Create separate refs for each dropdown
    const yearDropdownRef = useRef(null);
    const curriculumDropdownRef = useRef(null);
    const subjectDropdownRef = useRef(null);
  
    // Toggle functions for each dropdown
    const toggleYearDropdown = () => {
        setYearDropdown({
            ...yearDropdown,
            isOpen: !yearDropdown.isOpen
        });
    };

    const toggleCurriculumDropdown = () => {
        setCurriculumDropdown({
            ...curriculumDropdown,
            isOpen: !curriculumDropdown.isOpen
        });
    };

    const toggleSubjectDropdown = () => {
        setSubjectDropdown({
            ...subjectDropdown,
            isOpen: !subjectDropdown.isOpen
        });
    };
  
    // Handle selecting options for each dropdown
    const handleYearSelect = (option) => {
        setYearDropdown({
            isOpen: false,
            selectedOption: option
        });
    };

    const handleCurriculumSelect = (option) => {
        setCurriculumDropdown({
            isOpen: false,
            selectedOption: option
        });
    };

    const handleSubjectSelect = (option) => {
        setSubjectDropdown({
            isOpen: false,
            selectedOption: option
        });
    };
    
    // Handle clearing selected options
    const clearYearOption = (e) => {
        e.stopPropagation(); // Prevent dropdown from opening when close is clicked
        setYearDropdown({
            ...yearDropdown,
            selectedOption: ""
        });
    };
    
    const clearCurriculumOption = (e) => {
        e.stopPropagation(); 
        setCurriculumDropdown({
            ...curriculumDropdown,
            selectedOption: ""
        });
    };
    
    const clearSubjectOption = (e) => {
        e.stopPropagation();
        setSubjectDropdown({
            ...subjectDropdown,
            selectedOption: ""
        });
    };
  
    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            // Check Year dropdown
            if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target)) {
                setYearDropdown(prev => ({
                    ...prev,
                    isOpen: false
                }));
            }
            
            // Check Curriculum dropdown
            if (curriculumDropdownRef.current && !curriculumDropdownRef.current.contains(event.target)) {
                setCurriculumDropdown(prev => ({
                    ...prev,
                    isOpen: false
                }));
            }
            
            // Check Subject dropdown
            if (subjectDropdownRef.current && !subjectDropdownRef.current.contains(event.target)) {
                setSubjectDropdown(prev => ({
                    ...prev,
                    isOpen: false
                }));
            }
        }
      
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className='row container-fluid d-flex g-0 findt-filters-main' id='findt-filters'>
            <div className="col-8 d-flex findt-filters-sec">
                {/* Year Level Dropdown */}
                <div className="col-4 d-flex findt-filter-main justify-content-center align-items-center gap-3" ref={yearDropdownRef}>
                    <span className="fw-bold findt-filter-h">Year Level</span>
                    <div className="dropdown">
                        <button 
                            className={`btn btn-secondary d-flex px-5 auto-width ${yearDropdown.isOpen ? 'dropdown-open' : ''}`}
                            type="button"
                            onClick={toggleYearDropdown}
                            aria-expanded={yearDropdown.isOpen}
                        >
                            {yearDropdown.selectedOption || "Select Year"}
                        </button>
                        
                        {yearDropdown.isOpen && (
                            <ul className="dropdown-menu show">
                                <li><button className="dropdown-item" onClick={() => handleYearSelect("Year 1")}>Year 1</button></li>
                                <li><button className="dropdown-item" onClick={() => handleYearSelect("Year 2")}>Year 2</button></li>
                                <li><button className="dropdown-item" onClick={() => handleYearSelect("Year 3")}>Year 3</button></li>
                                <li><button className="dropdown-item" onClick={() => handleYearSelect("Year 4")}>Year 4</button></li>
                            </ul>
                        )}
                    </div>
                    {yearDropdown.selectedOption && (
                        <button type="button" className="btn-close" onClick={clearYearOption} aria-label="Close"></button>
                    )}
                </div>

                {/* Curriculum Dropdown */}
                <div className="col-4 d-flex findt-filter-main justify-content-center align-items-center gap-3" ref={curriculumDropdownRef}>
                    <span className="fw-bold findt-filter-h">Curriculum</span>
                    <div className="dropdown">
                        <button 
                            className={`btn btn-secondary d-flex px-3 auto-width ${curriculumDropdown.isOpen ? 'dropdown-open' : ''}`}
                            type="button"
                            onClick={toggleCurriculumDropdown}
                            aria-expanded={curriculumDropdown.isOpen}
                        >
                            {curriculumDropdown.selectedOption || "Select"}
                        </button>
                        
                        {curriculumDropdown.isOpen && (
                            <ul className="dropdown-menu show">
                                <li><button className="dropdown-item" onClick={() => handleCurriculumSelect("National")}>National</button></li>
                                <li><button className="dropdown-item" onClick={() => handleCurriculumSelect("International")}>International</button></li>
                                <li><button className="dropdown-item" onClick={() => handleCurriculumSelect("IB")}>IB</button></li>
                                <li><button className="dropdown-item" onClick={() => handleCurriculumSelect("Cambridge")}>Cambridge</button></li>
                            </ul>
                        )}
                    </div>
                    {curriculumDropdown.selectedOption && (
                        <button type="button" className="btn-close" onClick={clearCurriculumOption} aria-label="Close"></button>
                    )}
                </div>

                {/* Subject Dropdown */}
                <div className="col-4 d-flex findt-filter-main justify-content-center align-items-center gap-3" ref={subjectDropdownRef}>
                    <span className="fw-bold findt-filter-h">Subject</span>
                    <div className="dropdown">
                        <button 
                            className={`btn btn-secondary d-flex px-3 auto-width ${subjectDropdown.isOpen ? 'dropdown-open' : ''}`}
                            type="button"
                            onClick={toggleSubjectDropdown}
                            aria-expanded={subjectDropdown.isOpen}
                        >
                            {subjectDropdown.selectedOption || "Type in your subject"}
                        </button>
                        
                        {subjectDropdown.isOpen && (
                            <ul className="dropdown-menu show">
                                <li><button className="dropdown-item" onClick={() => handleSubjectSelect("Mathematics")}>Mathematics</button></li>
                                <li><button className="dropdown-item" onClick={() => handleSubjectSelect("Science")}>Science</button></li>
                                <li><button className="dropdown-item" onClick={() => handleSubjectSelect("English")}>English</button></li>
                                <li><button className="dropdown-item" onClick={() => handleSubjectSelect("History")}>History</button></li>
                            </ul>
                        )}
                    </div>
                    {subjectDropdown.selectedOption && (
                        <button type="button" className="btn-close" onClick={clearSubjectOption} aria-label="Close"></button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default FindtFilters;