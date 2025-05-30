import React, { useState } from 'react';
import "../../../../css/dashboards/tutor/account-settings/account-settings.css";

function TutorAccountSettings() {
    const [profileImage, setProfileImage] = useState(null);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [introVideo, setIntroVideo] = useState(null);
    const [schools, setSchools] = useState(['']);
    const [currentStudies, setCurrentStudies] = useState(['']);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            setIntroVideo(videoUrl);
        }
    };

    const handleLocationSelect = (e) => {
        const value = e.target.value;
        if (value && !selectedLocations.includes(value)) {
            setSelectedLocations([...selectedLocations, value]);
        }
    };

    const handleSubjectSelect = (e) => {
        const value = e.target.value;
        if (value && !selectedSubjects.includes(value)) {
            setSelectedSubjects([...selectedSubjects, value]);
        }
    };

    const removeLocation = (location) => {
        setSelectedLocations(selectedLocations.filter(loc => loc !== location));
    };

    const removeSubject = (subject) => {
        setSelectedSubjects(selectedSubjects.filter(sub => sub !== subject));
    };

    const handleSchoolChange = (index, value) => {
        const newSchools = [...schools];
        newSchools[index] = value;
        setSchools(newSchools);
    };

    const handleStudyChange = (index, value) => {
        const newStudies = [...currentStudies];
        newStudies[index] = value;
        setCurrentStudies(newStudies);
    };

    const addSchool = () => {
        setSchools([...schools, '']);
    };

    const removeSchool = (index) => {
        const newSchools = schools.filter((_, i) => i !== index);
        setSchools(newSchools);
    };

    const addStudy = () => {
        setCurrentStudies([...currentStudies, '']);
    };

    const removeStudy = (index) => {
        const newStudies = currentStudies.filter((_, i) => i !== index);
        setCurrentStudies(newStudies);
    };

    return (
        <div className="account-settings-main">
            <h1 className="account-settings-title">`Account Management
            </h1>
            <div className="account-settings-header">
                <div className="account-settings-profile">
                    <div className="account-settings-avatar">
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" />
                        ) : (
                            <div className="account-settings-avatar-placeholder">
                                <i className="fas fa-user"></i>
                            </div>
                        )}
                        <label htmlFor="profile-upload" className="account-settings-avatar-upload">
                            <i className="fas fa-camera"></i>
                            <input
                                type="file"
                                id="profile-upload"
                                className="d-none"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>
                    <div className="account-settings-profile-info">
                        <h2>Sarah Brown</h2>
                        <div className="account-settings-stats">
                            <span className="stats-gold">
                                <i className="fas fa-medal"></i> Gold (250/5)
                            </span>
                            <span className="stats-atr">
                                <i className="fas fa-chart-line"></i> ATR (96.45)
                            </span>
                        </div>
                        <div className="account-settings-meta">
                            <span className="account-settings-role">
                                <i className="fas fa-briefcase"></i> Developer
                            </span>
                            <span className="account-settings-location">
                                <i className="fas fa-map-marker-alt"></i> New York
                            </span>
                            <span className="account-settings-joined">
                                <i className="fas fa-calendar-alt"></i> Joined March 17
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="account-settings-form">
                <h3 className="mb-6">
                    <i className="fas fa-edit"></i> Edit your account information:
                </h3>
                <form>
                    <div className="account-settings-form-row">
                        <div className="account-settings-form-group">
                            <label>
                                <i className="fas fa-user"></i> First Name
                            </label>
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="account-settings-form-group">
                            <label>
                                <i className="fas fa-user"></i> Last Name
                            </label>
                            <input type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="account-settings-form-group full-width">
                        <label>
                            <i className="fas fa-comment-alt"></i> About you / Bio
                        </label>
                        <textarea rows="4" placeholder="Write something about yourself..."></textarea>
                    </div>

                    <div className="account-settings-form-group full-width">
                        <label>
                            <i className="fas fa-video"></i> Introduction Video
                        </label>
                        <div className="video-upload-container">
                            {introVideo ? (
                                <div className="video-preview">
                                    <video 
                                        controls 
                                        src={introVideo}
                                        className="uploaded-video"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                    <button 
                                        type="button" 
                                        className="video-remove-btn"
                                        onClick={() => setIntroVideo(null)}
                                    >
                                        <i className="fas fa-trash-alt"></i> Remove Video
                                    </button>
                                </div>
                            ) : (
                                <div className="video-upload-placeholder">
                                    <input
                                        type="file"
                                        id="video-upload"
                                        className="video-input"
                                        accept="video/*"
                                        onChange={handleVideoChange}
                                    />
                                    <label htmlFor="video-upload" className="video-upload-label d-flex flex-column align-items-center gap-2">
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <span>Click to upload your introduction video</span>
                                        <span className="video-format-hint">
                                            <i className="fas fa-info-circle"></i> MP4, WebM or Ogg format
                                        </span>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>
                            <i className="fas fa-map-marked-alt"></i> AVAILABLE LOCATIONS
                        </h3>
                        <div className="form-section-content">
                            <div className="multi-select-container">
                                <select 
                                    className="form-select"
                                    onChange={handleLocationSelect}
                                    value=""
                                >
                                    <option value="">Select locations...</option>
                                    <option value="Online">Online</option>
                                    <option value="Tingalpa">Tingalpa</option>
                                    <option value="Camp hill">Camp hill</option>
                                    <option value="Buderim">Buderim</option>
                                </select>
                                <div className="selected-items">
                                    {selectedLocations.map((location, index) => (
                                        <span key={index} className="selected-tag">
                                            <i className="fas fa-map-pin"></i> {location}
                                            <button 
                                                type="button" 
                                                onClick={() => removeLocation(location)}
                                                className="tag-remove"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>
                            <i className="fas fa-book"></i> MY TUTORING SUBJECTS
                        </h3>
                        <div className="form-section-content">
                            <div className="multi-select-container">
                                <select 
                                    className="form-select"
                                    onChange={handleSubjectSelect}
                                    value=""
                                >
                                    <option value="">Select subjects...</option>
                                    <option value="IB Chemistry HL Year 11-12">IB Chemistry HL Year 11-12</option>
                                    <option value="IB Biology HL Year 11-12">IB Biology HL Year 11-12</option>
                                    <option value="IB Biology SL Year 11-12">IB Biology SL Year 11-12</option>
                                    <option value="Maths Year 5-10">Maths Year 5-10</option>
                                    <option value="Science Year 5-10">Science Year 5-10</option>
                                    <option value="Maths Year 1-4">Maths Year 1-4</option>
                                    <option value="Mathematics Applications Year 11-12">Mathematics Applications Year 11-12</option>
                                </select>
                                <div className="selected-items">
                                    {selectedSubjects.map((subject, index) => (
                                        <span key={index} className="selected-tag">
                                            <i className="fas fa-book-open"></i> {subject}
                                            <button 
                                                type="button" 
                                                onClick={() => removeSubject(subject)}
                                                className="tag-remove"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>
                            <i className="fas fa-graduation-cap"></i> EDUCATION
                        </h3>
                        <div className="education-subsection">
                            <h4>
                                <i className="fas fa-school"></i> I went to school at
                            </h4>
                            <div className="education-entries">
                                {schools.map((school, index) => (
                                    <div key={index} className="education-entry">
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={school}
                                            onChange={(e) => handleSchoolChange(index, e.target.value)}
                                            placeholder="Enter school name"
                                        />
                                        {schools.length > 1 && (
                                            <button 
                                                type="button" 
                                                className="btn-remove"
                                                onClick={() => removeSchool(index)}
                                            >
                                                <i className="fas fa-trash-alt"></i> Remove
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button type="button" className="btn-add" onClick={addSchool}>
                                    <i className="fas fa-plus"></i> Add Another School
                                </button>
                            </div>
                        </div>

                        <div className="education-subsection">
                            <h4>
                                <i className="fas fa-university"></i> I'm Currently Studying
                            </h4>
                            <div className="education-entries">
                                {currentStudies.map((study, index) => (
                                    <div key={index} className="education-entry">
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={study}
                                            onChange={(e) => handleStudyChange(index, e.target.value)}
                                            placeholder="Enter what you're studying"
                                        />
                                        {currentStudies.length > 1 && (
                                            <button 
                                                type="button" 
                                                className="btn-remove"
                                                onClick={() => removeStudy(index)}
                                            >
                                                <i className="fas fa-trash-alt"></i> Remove
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button type="button" className="btn-add" onClick={addStudy}>
                                    <i className="fas fa-plus"></i> Add Another Course
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TutorAccountSettings;
