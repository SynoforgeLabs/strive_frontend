import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as Snippets from '../../components/snippets/snippets-index';
import tutorApplicationService from '../../services/tutorApplicationService';
import '../../css/track-application.css';

const TrackApplicationPage = () => {
  const [searchParams] = useSearchParams();
  const [applicationData, setApplicationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchMethod, setSearchMethod] = useState('id'); // 'id' or 'email'
  const [searchValue, setSearchValue] = useState('');

  // Check if application ID is provided in URL
  useEffect(() => {
    const applicationId = searchParams.get('id');
    if (applicationId) {
      setSearchValue(applicationId);
      setSearchMethod('id');
      handleSearch(applicationId, 'id');
    }
  }, [searchParams]);

  const handleSearch = async (value = searchValue, method = searchMethod) => {
    if (!value.trim()) {
      setError('Please enter an application ID or email address');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      let response;
      if (method === 'id') {
        response = await tutorApplicationService.getApplicationStatus(value.trim());
      } else {
        response = await tutorApplicationService.getApplicationStatusByEmail(value.trim());
      }
      setApplicationData(response);
    } catch (err) {
      setError(err.message || 'Application not found. Please check your details and try again.');
      setApplicationData(null);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'pending': return 'bg-warning';
      case 'under_review': return 'bg-info';
      case 'interview_scheduled': return 'bg-primary';
      case 'approved': return 'bg-success';
      case 'rejected': return 'bg-danger';
      case 'withdrawn': return 'bg-secondary';
      default: return 'bg-secondary';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="track-application-container">
      <Snippets.Navbar />
      
      <div className="container track-application-content">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header text-center bg-primary text-white">
                <h2><i className="bi bi-search"></i> Track Your Application</h2>
                <p className="mb-0">Enter your application details to check the status</p>
              </div>
              
              <div className="card-body">
                {/* Search Form */}
                <div className="search-section mb-4">
                  <div className="row">
                    <div className="col-md-3">
                      <select 
                        className="form-select"
                        value={searchMethod}
                        onChange={(e) => setSearchMethod(e.target.value)}
                      >
                        <option value="id">Application ID</option>
                        <option value="email">Email Address</option>
                      </select>
                    </div>
                    <div className="col-md-7">
                      <input
                        type={searchMethod === 'email' ? 'email' : 'text'}
                        className="form-control"
                        placeholder={searchMethod === 'id' ? 'Enter Application ID (e.g., SA12345678)' : 'Enter Email Address'}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      />
                    </div>
                    <div className="col-md-2">
                      <button 
                        className="btn btn-primary w-100"
                        onClick={() => handleSearch()}
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-1" role="status"></span>
                            Searching...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-search me-1"></i>
                            Search
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="alert alert-danger" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    {error}
                  </div>
                )}

                {/* Application Data */}
                {applicationData && (
                  <div className="application-details">
                    <div className="row">
                      <div className="col-md-6">
                        <h5>Application Information</h5>
                        <div className="info-card">
                          <p><strong>Application ID:</strong> <code>{applicationData.application_id}</code></p>
                          <p><strong>Name:</strong> {applicationData.full_name}</p>
                          <p><strong>Email:</strong> {applicationData.email}</p>
                          <p><strong>Submitted:</strong> {formatDate(applicationData.submitted_at)}</p>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <h5>Current Status</h5>
                        <div className="status-card">
                          <span className={`badge ${getStatusBadgeClass(applicationData.status)} fs-6 mb-3`}>
                            {applicationData.status_display}
                          </span>
                          <p className="text-muted">Last updated: {formatDate(applicationData.updated_at)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Status Timeline */}
                    {applicationData.status_updates && applicationData.status_updates.length > 0 && (
                      <div className="status-timeline mt-4">
                        <h5>Status History</h5>
                        <div className="timeline">
                          {applicationData.status_updates.map((update, index) => (
                            <div key={update.id} className="timeline-item">
                              <div className="timeline-marker"></div>
                              <div className="timeline-content">
                                <div className="d-flex justify-content-between">
                                  <span className="fw-bold">{update.new_status.replace('_', ' ').toUpperCase()}</span>
                                  <small className="text-muted">{formatDate(update.updated_at)}</small>
                                </div>
                                {update.notes && <p className="mb-0 text-muted">{update.notes}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Next Steps */}
                    <div className="next-steps mt-4">
                      <h5>What's Next?</h5>
                      <div className="alert alert-info">
                        {applicationData.status === 'pending' && (
                          <p><i className="bi bi-clock"></i> Your application is being reviewed. We'll contact you within 3-5 business days.</p>
                        )}
                        {applicationData.status === 'under_review' && (
                          <p><i className="bi bi-eye"></i> Your application is currently under detailed review by our team.</p>
                        )}
                        {applicationData.status === 'interview_scheduled' && (
                          <p><i className="bi bi-calendar-check"></i> Congratulations! We'll contact you soon to schedule your interview.</p>
                        )}
                        {applicationData.status === 'approved' && (
                          <p><i className="bi bi-check-circle"></i> Congratulations! Your application has been approved. We'll be in touch with next steps.</p>
                        )}
                        {applicationData.status === 'rejected' && (
                          <p><i className="bi bi-x-circle"></i> Unfortunately, we're unable to proceed with your application at this time.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Help Section */}
                <div className="help-section mt-5 pt-4 border-top">
                  <h6>Need Help?</h6>
                  <p className="text-muted">
                    If you have any questions about your application, please contact us at{' '}
                    <a href="mailto:applications@striveacademics.com.au">applications@striveacademics.com.au</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Snippets.Footer />
    </div>
  );
};

export default TrackApplicationPage; 