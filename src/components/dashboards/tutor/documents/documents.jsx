import React, { useState } from 'react';
import "../../../../css/dashboards/tutor/documents/documents.css";

function TutorDocuments() {
    const [documents, setDocuments] = useState({
        tutorContract: {
            file: null,
            status: 'pending', // 'pending', 'approved', 'not_uploaded'
            fileName: ''
        },
        wwcc: {
            file: null,
            status: 'not_uploaded', // 'pending', 'approved', 'not_uploaded'
            fileName: ''
        }
    });

    const handleFileUpload = (documentType, e) => {
        const file = e.target.files[0];
        if (file) {
            setDocuments(prev => ({
                ...prev,
                [documentType]: {
                    ...prev[documentType],
                    file: file,
                    status: 'pending',
                    fileName: file.name
                }
            }));
        }
    };

    const getStatusBadge = (status) => {
        switch(status) {
            case 'approved':
                return <span className="status-badge approved">
                    <i className="fas fa-check-circle"></i> Approved
                </span>;
            case 'pending':
                return <span className="status-badge pending">
                    <i className="fas fa-clock"></i> Pending Approval
                </span>;
            default:
                return <span className="status-badge not-uploaded">
                    <i className="fas fa-exclamation-circle"></i> Not Uploaded
                </span>;
        }
    };

    return (
        <div className="tutor-documents-main">
            <div className="documents-container">
                <div className="documents-header">
                    <h1>
                        <i className="fas fa-file-alt"></i> Required Documents
                    </h1>
                    <p className="documents-subtitle">Please upload the following required documents to complete your profile</p>
                </div>

                <div className="documents-content">
                    {/* Tutor Contract Upload Section */}
                    <div className="document-section">
                        <div className="document-header">
                            <h3>
                                <i className="fas fa-file-signature"></i> Tutor Contract
                            </h3>
                            {getStatusBadge(documents.tutorContract.status)}
                        </div>
                        <div className="document-upload-container">
                            <div className="upload-box">
                                <input
                                    type="file"
                                    id="tutorContract"
                                    className="file-input"
                                    onChange={(e) => handleFileUpload('tutorContract', e)}
                                    accept=".pdf,.doc,.docx"
                                />
                                <label htmlFor="tutorContract" className="upload-label">
                                    <i className="fas fa-cloud-upload-alt"></i>
                                    <span className="upload-text">
                                        {documents.tutorContract.fileName || 'Click to upload Tutor Contract'}
                                    </span>
                                    <span className="upload-hint">PDF, DOC, or DOCX</span>
                                </label>
                            </div>
                            <div className="document-info">
                                <p><i className="fas fa-info-circle"></i> Please download the Tutor Contract form from your dashboard, sign it, and upload it here.</p>
                            </div>
                        </div>
                    </div>

                    {/* WWCC Upload Section */}
                    <div className="document-section">
                        <div className="document-header">
                            <h3>
                                <i className="fas fa-id-card"></i> Working with Children Check (WWCC)
                            </h3>
                            {getStatusBadge(documents.wwcc.status)}
                        </div>
                        <div className="document-upload-container">
                            <div className="upload-box">
                                <input
                                    type="file"
                                    id="wwcc"
                                    className="file-input"
                                    onChange={(e) => handleFileUpload('wwcc', e)}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                />
                                <label htmlFor="wwcc" className="upload-label">
                                    <i className="fas fa-cloud-upload-alt"></i>
                                    <span className="upload-text">
                                        {documents.wwcc.fileName || 'Click to upload WWCC document'}
                                    </span>
                                    <span className="upload-hint">PDF, JPG, or PNG</span>
                                </label>
                            </div>
                            <div className="document-info">
                                <p><i className="fas fa-info-circle"></i> Please upload a clear copy of your valid Working with Children Check certificate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TutorDocuments;
