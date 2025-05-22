import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/tutor/tutor-contact.css';


function TutorContact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        password: '',
        confirmPassword: '',
        message: '',
        preferredContact: 'email',
        availabilityGrid: {
            morning: { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
            afternoon: { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
            night: { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false }
        },
        availabilityNotes: '',
        agreeToTerms: false
    });
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAvailabilityChange = (timeOfDay, day) => {
        setFormData(prevState => ({
            ...prevState,
            availabilityGrid: {
                ...prevState.availabilityGrid,
                [timeOfDay]: {
                    ...prevState.availabilityGrid[timeOfDay],
                    [day]: !prevState.availabilityGrid[timeOfDay][day]
                }
            }
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreeToTerms) {
            alert("Please agree to the terms and conditions to proceed.");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        // Rest of the form submission logic
        console.log('Form submitted:', formData);
        };

    // Helper function to render checkbox with proper state binding
    const renderCheckbox = (timeOfDay, day) => (
        <input
            type="checkbox"
            className="tutor-contact-checkbox"
            checked={formData.availabilityGrid[timeOfDay][day]}
            onChange={() => handleAvailabilityChange(timeOfDay, day)}
        />
    );
    
    return (
        <div className="tutor-contact-wrapper">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="tutor-contact-card">
                            <div className="tutor-contact-card-body p-4 p-md-5">
                                <div className="text-center mb-4">
                                    <h1 className="tutor-contact-title">Contact Tutor</h1>
                                    <div className="tutor-contact-profile">
                                        <div className="tutor-contact-profile-image">
                                            <img 
                                                src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png" 
                                                alt="Enola Holmes" 
                                                className="tutor-contact-avatar"
                                            />
                                        </div>
                                        <h2 className="tutor-contact-name">Enola Holmes</h2>
                                        <div className="tutor-contact-stats">
                                            <div className="tutor-contact-atar">
                                                <span className="tutor-contact-score">94.27</span>
                                                <span className="tutor-contact-label">ATAR</span>
                                            </div>
                                            <div className="tutor-contact-tier">
                                                <span className="tutor-contact-badge">Gold Tutor</span>
                                                <span className="tutor-contact-price">30$/h</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    
                                <form onSubmit={handleSubmit} className="tutor-contact-form">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="tutor-contact-form-group">
                                                <label htmlFor="name" className="tutor-contact-label">Full Name *</label>
                                            <input 
                                                type="text" 
                                                    className="tutor-contact-input"
                                                id="name" 
                                                    name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required 
                                            />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tutor-contact-form-group">
                                                <label htmlFor="email" className="tutor-contact-label">Email Address *</label>
                                            <input 
                                                type="email" 
                                                    className="tutor-contact-input"
                                                id="email" 
                                                    name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required 
                                            />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tutor-contact-form-group">
                                                <label htmlFor="phone" className="tutor-contact-label">Phone Number</label>
                                            <input 
                                                type="tel" 
                                                    className="tutor-contact-input"
                                                id="phone" 
                                                    name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tutor-contact-form-group">
                                                <label htmlFor="subject" className="tutor-contact-label">Subject *</label>
                                            <select 
                                                    className="tutor-contact-select"
                                                id="subject"
                                                    name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select a subject</option>
                                                    <option value="IB Chemistry HL">IB Chemistry HL Year 11-12</option>
                                                    <option value="IB Biology HL">IB Biology HL Year 11-12</option>
                                                    <option value="IB Biology SL">IB Biology SL Year 11-12</option>
                                                    <option value="Maths 5-10">Maths Year 5-10</option>
                                                    <option value="Science 5-10">Science Year 5-10</option>
                                                    <option value="Maths 1-4">Maths Year 1-4</option>
                                                    <option value="Math Applications">Mathematics Applications Year 11-12</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tutor-contact-form-group">
                                                <label htmlFor="password" className="tutor-contact-label">Password *</label>
                                                <input
                                                    type="password"
                                                    className="tutor-contact-input"
                                                    id="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                    minLength="8"
                                                    placeholder="Enter your password"
                                                />
                                                <small className="tutor-contact-help-text">Minimum 8 characters</small>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tutor-contact-form-group">
                                                <label htmlFor="confirmPassword" className="tutor-contact-label">Confirm Password *</label>
                                            <input 
                                                    type="password"
                                                    className="tutor-contact-input"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                onChange={handleChange}
                                                required 
                                                    minLength="8"
                                                    placeholder="Confirm your password"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="tutor-contact-form-group">
                                                <label htmlFor="message" className="tutor-contact-label">Message *</label>
                                            <textarea 
                                                    className="tutor-contact-textarea"
                                                id="message" 
                                                    name="message"
                                                    rows="4"
                                                value={formData.message}
                                                onChange={handleChange}
                                                    required
                                                    placeholder="Please include any specific questions or requirements you have for the tutor"
                                            ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="tutor-contact-form-group">
                                                <label className="tutor-contact-label d-block">Preferred Contact Method *</label>
                                                <div className="tutor-contact-radio-group">
                                                    <div className="tutor-contact-radio">
                                                        <input
                                                            type="radio"
                                                            className="tutor-contact-radio-input"
                                                            id="email-preference"
                                                            name="preferredContact"
                                                            value="email"
                                                            checked={formData.preferredContact === 'email'}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="tutor-contact-radio-label" htmlFor="email-preference">Email</label>
                                                    </div>
                                                    <div className="tutor-contact-radio">
                                                        <input
                                                            type="radio"
                                                            className="tutor-contact-radio-input"
                                                            id="phone-preference"
                                                            name="preferredContact"
                                                            value="phone"
                                                            checked={formData.preferredContact === 'phone'}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="tutor-contact-radio-label" htmlFor="phone-preference">Phone</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="tutor-contact-form-group">
                                                <label className="tutor-contact-label">Preferred Availability *</label>
                                                <div className="tutor-contact-availability-section">
                                                    <div className="tutor-contact-availability-table">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th></th>
                                                                    <th>Mon</th>
                                                                    <th>Tue</th>
                                                                    <th>Wed</th>
                                                                    <th>Thu</th>
                                                                    <th>Fri</th>
                                                                    <th>Sat</th>
                                                                    <th>Sun</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="tutor-contact-time-label">Morning</td>
                                                                    <td>{renderCheckbox('morning', 'mon')}</td>
                                                                    <td>{renderCheckbox('morning', 'tue')}</td>
                                                                    <td>{renderCheckbox('morning', 'wed')}</td>
                                                                    <td>{renderCheckbox('morning', 'thu')}</td>
                                                                    <td>{renderCheckbox('morning', 'fri')}</td>
                                                                    <td>{renderCheckbox('morning', 'sat')}</td>
                                                                    <td>{renderCheckbox('morning', 'sun')}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="tutor-contact-time-label">Afternoon</td>
                                                                    <td>{renderCheckbox('afternoon', 'mon')}</td>
                                                                    <td>{renderCheckbox('afternoon', 'tue')}</td>
                                                                    <td>{renderCheckbox('afternoon', 'wed')}</td>
                                                                    <td>{renderCheckbox('afternoon', 'thu')}</td>
                                                                    <td>{renderCheckbox('afternoon', 'fri')}</td>
                                                                    <td>{renderCheckbox('afternoon', 'sat')}</td>
                                                                    <td>{renderCheckbox('afternoon', 'sun')}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="tutor-contact-time-label">Night</td>
                                                                    <td>{renderCheckbox('night', 'mon')}</td>
                                                                    <td>{renderCheckbox('night', 'tue')}</td>
                                                                    <td>{renderCheckbox('night', 'wed')}</td>
                                                                    <td>{renderCheckbox('night', 'thu')}</td>
                                                                    <td>{renderCheckbox('night', 'fri')}</td>
                                                                    <td>{renderCheckbox('night', 'sat')}</td>
                                                                    <td>{renderCheckbox('night', 'sun')}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <small className="tutor-contact-help-text">Please select all time slots that work for you</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="tutor-contact-form-group">
                                                <label htmlFor="availability-notes" className="tutor-contact-label">Additional Availability Notes</label>
                                                <textarea
                                                    className="tutor-contact-textarea"
                                                    id="availability-notes"
                                                    name="availabilityNotes"
                                                    rows="2"
                                                    value={formData.availabilityNotes}
                                                    onChange={handleChange}
                                                    placeholder="Any specific timing preferences or additional notes about your availability"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="tutor-contact-form-group">
                                                <div className="tutor-contact-terms">
                                                    <div className="tutor-contact-checkbox-wrapper">
                                                        <input
                                                            type="checkbox"
                                                            id="agreeToTerms"
                                                            name="agreeToTerms"
                                                            className="tutor-contact-terms-checkbox"
                                                            checked={formData.agreeToTerms}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                        <label htmlFor="agreeToTerms" className="tutor-contact-terms-label">
                                                            I agree to the <a href="/terms" target="_blank" className="tutor-contact-terms-link">Terms and Conditions</a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="tutor-contact-button-wrapper">
                                                <button type="submit" className="tutor-contact-submit-btn">Signup and Send Message</button>
                                            </div>
                                    </div>
                                    </div>
                                </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TutorContact;