import React, { useState } from 'react';
import "../../../../css/dashboards/tutor/account-settings/account-settings.css";

function TutorAccountSettings() {
    const [profileImage, setProfileImage] = useState(null);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [introVideo, setIntroVideo] = useState(null);
    const [schools, setSchools] = useState(['']);
    const [currentStudies, setCurrentStudies] = useState(['']);
    const [isEditMode, setIsEditMode] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phoneNumber: '',
        bio: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [yearLevels] = useState([
        'Year 1-4', 'Year 5-6', 'Year 7-8', 'Year 9-10', 'Year 11-12'
    ]);
    const [curriculums] = useState({
        'Year 1-4': ['QLD', 'NSW', 'VIC', 'IB'],
        'Year 5-6': ['QLD', 'NSW', 'VIC', 'IB'],
        'Year 7-8': ['QLD', 'NSW', 'VIC', 'IB'],
        'Year 9-10': ['QLD', 'NSW', 'VIC', 'IB'],
        'Year 11-12': ['QLD', 'NSW', 'VIC', 'IB']
    });
    const [subjects] = useState({
        'QLD': ['Mathematics', 'English', 'Science', 'Physics', 'Chemistry', 'Biology'],
        'NSW': ['Mathematics', 'English', 'Science', 'Physics', 'Chemistry', 'Biology'],
        'VIC': ['Mathematics', 'English', 'Science', 'Physics', 'Chemistry', 'Biology'],
        'IB': ['Mathematics HL', 'Mathematics SL', 'Physics HL', 'Physics SL', 'Chemistry HL', 'Chemistry SL']
    });
    const [subjectEntries, setSubjectEntries] = useState([{
        yearLevel: '',
        curriculum: '',
        subject: ''
    }]);
    const [showPasswords, setShowPasswords] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false
    });

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

    const handleSubjectChange = (index, field, value) => {
        const newEntries = [...subjectEntries];
        newEntries[index] = {
            ...newEntries[index],
            [field]: value
        };
        
        // Reset dependent fields
        if (field === 'yearLevel') {
            newEntries[index].curriculum = '';
            newEntries[index].subject = '';
        } else if (field === 'curriculum') {
            newEntries[index].subject = '';
        }
        
        setSubjectEntries(newEntries);
    };

    const addSubjectEntry = () => {
        setSubjectEntries([...subjectEntries, {
            yearLevel: '',
            curriculum: '',
            subject: ''
        }]);
    };

    const removeSubjectEntry = (index) => {
        const newEntries = subjectEntries.filter((_, i) => i !== index);
        setSubjectEntries(newEntries);
    };

    const removeLocation = (location) => {
        setSelectedLocations(selectedLocations.filter(loc => loc !== location));
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', {
            ...formData,
            schools,
            currentStudies,
            selectedLocations,
            selectedSubjects,
            profileImage,
            introVideo
        });
        setIsEditMode(false);
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    return (
        <div className="account-settings-main">
            <h1 className="account-settings-title">Account Management</h1>

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
                                Gold (250/5)
                            </span>
                            <span className="stats-atr">
                                ATR (96.45)
                            </span>
                        </div>
                        <div className="account-settings-meta">
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
                <form onSubmit={handleSubmit}>
                    <div className="edit-button-container">
                        <button 
                            type="button" 
                            className={`edit-mode-button ${isEditMode ? 'active' : ''}`}
                            onClick={() => setIsEditMode(!isEditMode)}
                        >
                            <i className="fas fa-edit"></i>
                            {isEditMode ? 'Cancel Edit' : 'Edit Profile'}
                        </button>
                    </div>

                    <div className="account-settings-form-row">
                        <div className="account-settings-form-group">
                            <label>
                                <i className="fas fa-user"></i> Full Name
                            </label>
                            <input 
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="account-settings-form-group">
                            <label>
                                <i className="fas fa-at"></i> Username
                            </label>
                            <input 
                                type="text" 
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                placeholder="Enter your username"
                                disabled={!isEditMode}
                            />
                        </div>
                    </div>

                    <div className="account-settings-form-row">
                        <div className="account-settings-form-group">
                            <label>
                                <i className="fas fa-envelope"></i> Email
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email address"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="account-settings-form-group">
                            <label>
                                <i className="fas fa-phone"></i> Phone Number
                            </label>
                            <input 
                                type="tel" 
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                disabled={!isEditMode}
                            />
                        </div>
                    </div>

                    <div className="account-settings-form-group full-width">
                        <label>
                            <i className="fas fa-comment-alt"></i> About you / Bio
                        </label>
                        <textarea 
                            rows="4" 
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            placeholder="Write something about yourself..."
                            disabled={!isEditMode}
                        ></textarea>
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
                                    {isEditMode && (
                                        <button 
                                            type="button" 
                                            className="video-remove-btn"
                                            onClick={() => setIntroVideo(null)}
                                        >
                                            <i className="fas fa-trash-alt"></i> Remove Video
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <div className="video-upload-placeholder">
                                    <input
                                        type="file"
                                        id="video-upload"
                                        className="video-input"
                                        accept="video/*"
                                        onChange={handleVideoChange}
                                        disabled={!isEditMode}
                                    />
                                    <label 
                                        htmlFor="video-upload" 
                                        className={`video-upload-label d-flex flex-column align-items-center gap-2 ${!isEditMode ? 'disabled' : ''}`}
                                    >
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
                            <i className="fas fa-lock"></i> CHANGE PASSWORD
                        </h3>
                        <div className="form-section-content">
                            <div className="password-change-container">
                                <div className="account-settings-form-group">
                                    <label>
                                        <i className="fas fa-key"></i> Current Password
                                    </label>
                                    <div className="password-input-container">
                                        <input 
                                            type="password"
                                            name="currentPassword"
                                            value={formData.currentPassword || ''}
                                            onChange={handleInputChange}
                                            placeholder="Enter your current password"
                                            disabled={!isEditMode}
                                            className="form-input"
                                        />
                                    </div>
                                </div>
                                <div className="account-settings-form-group">
                                    <label>
                                        <i className="fas fa-lock"></i> New Password
                                    </label>
                                    <div className="password-input-container">
                                        <input 
                                            type={showPasswords.newPassword ? "text" : "password"}
                                            name="newPassword"
                                            value={formData.newPassword || ''}
                                            onChange={handleInputChange}
                                            placeholder="Enter your new password"
                                            disabled={!isEditMode}
                                            className="form-input"
                                        />
                                        <button 
                                            type="button"
                                            className="password-toggle-btn"
                                            onClick={() => togglePasswordVisibility('newPassword')}
                                            disabled={!isEditMode}
                                        >
                                            <i className={`fas ${showPasswords.newPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="account-settings-form-group">
                                    <label>
                                        <i className="fas fa-lock"></i> Confirm Password
                                    </label>
                                    <div className="password-input-container">
                                        <input 
                                            type={showPasswords.confirmPassword ? "text" : "password"}
                                            name="confirmPassword"
                                            value={formData.confirmPassword || ''}
                                            onChange={handleInputChange}
                                            placeholder="Confirm your new password"
                                            disabled={!isEditMode}
                                            className="form-input"
                                        />
                                        <button 
                                            type="button"
                                            className="password-toggle-btn"
                                            onClick={() => togglePasswordVisibility('confirmPassword')}
                                            disabled={!isEditMode}
                                        >
                                            <i className={`fas ${showPasswords.confirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
                                    disabled={!isEditMode}
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
                                            {isEditMode && (
                                                <button 
                                                    type="button" 
                                                    onClick={() => removeLocation(location)}
                                                    className="tag-remove"
                                                >
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            )}
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
                            <div className="education-entries">
                                {subjectEntries.map((entry, index) => (
                                    <div key={index} className="education-entry">
                                        <div className="subject-dropdowns">
                                            <div className="subject-dropdown-group">
                                                <label>Year Level</label>
                                                <select 
                                                    className="form-select"
                                                    value={entry.yearLevel}
                                                    onChange={(e) => handleSubjectChange(index, 'yearLevel', e.target.value)}
                                                    disabled={!isEditMode}
                                                >
                                                    <option value="">Select year level...</option>
                                                    {yearLevels.map((year) => (
                                                        <option key={year} value={year}>{year}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="subject-dropdown-group">
                                                <label>Curriculum/State</label>
                                                <select 
                                                    className="form-select"
                                                    value={entry.curriculum}
                                                    onChange={(e) => handleSubjectChange(index, 'curriculum', e.target.value)}
                                                    disabled={!isEditMode || !entry.yearLevel}
                                                >
                                                    <option value="">Select curriculum...</option>
                                                    {entry.yearLevel && curriculums[entry.yearLevel].map((curr) => (
                                                        <option key={curr} value={curr}>{curr}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="subject-dropdown-group">
                                                <label>Subject</label>
                                                <select 
                                                    className="form-select"
                                                    value={entry.subject}
                                                    onChange={(e) => handleSubjectChange(index, 'subject', e.target.value)}
                                                    disabled={!isEditMode || !entry.yearLevel || !entry.curriculum}
                                                >
                                                    <option value="">Select subject...</option>
                                                    {entry.curriculum && subjects[entry.curriculum].map((subj) => (
                                                        <option key={subj} value={subj}>{subj}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {isEditMode && subjectEntries.length > 1 && (
                                                <button 
                                                    type="button" 
                                                    className="btn-remove"
                                                    onClick={() => removeSubjectEntry(index)}
                                                >
                                                    <i className="fas fa-trash-alt"></i> Remove
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {isEditMode && (
                                    <button type="button" className="btn-add" onClick={addSubjectEntry}>
                                        <i className="fas fa-plus"></i> Add Another Subject
                                    </button>
                                )}
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
                                            disabled={!isEditMode}
                                        />
                                        {isEditMode && schools.length > 1 && (
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
                                {isEditMode && (
                                    <button type="button" className="btn-add" onClick={addSchool}>
                                        <i className="fas fa-plus"></i> Add Another School
                                    </button>
                                )}
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
                                            disabled={!isEditMode}
                                        />
                                        {isEditMode && currentStudies.length > 1 && (
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
                                {isEditMode && (
                                    <button type="button" className="btn-add" onClick={addStudy}>
                                        <i className="fas fa-plus"></i> Add Another Course
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {isEditMode && (
                        <div className="form-submit-container">
                            <button type="submit" className="submit-button">
                                <i className="fas fa-save"></i> Save Changes
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default TutorAccountSettings;
