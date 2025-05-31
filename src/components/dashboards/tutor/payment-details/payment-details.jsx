import React, { useState } from 'react';
import "../../../../css/dashboards/tutor/payment-details/payment-details.css";

function TutorPaymentDetails() {
    const [isEditMode, setIsEditMode] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('bank'); // 'bank' or 'paypal'
    const [formData, setFormData] = useState({
        accountName: '',
        bsb: '',
        accountNumber: '',
        paypalEmail: '',
    });

    // Mock transaction data - replace with actual API data
    const [transactions] = useState([
        {
            id: 1,
            date: '2024-03-15',
            amount: 150.00,
            status: 'completed',
            description: 'Payment for March Week 2'
        },
        {
            id: 2,
            date: '2024-03-08',
            amount: 200.00,
            status: 'completed',
            description: 'Payment for March Week 1'
        },
        {
            id: 3,
            date: '2024-03-01',
            amount: 175.00,
            status: 'completed',
            description: 'Payment for February Week 4'
        }
    ]);

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
        console.log('Form submitted:', formData);
        setIsEditMode(false);
    };

    const getStatusBadge = (status) => {
        switch(status) {
            case 'completed':
                return <span className="tutor-payments-status completed">
                    <i className="fas fa-check-circle"></i> Completed
                </span>;
            case 'pending':
                return <span className="tutor-payments-status pending">
                    <i className="fas fa-clock"></i> Pending
                </span>;
            case 'failed':
                return <span className="tutor-payments-status failed">
                    <i className="fas fa-times-circle"></i> Failed
                </span>;
            default:
                return null;
        }
    };

    return (
        <div className="tutor-payments-main">
            <h1 className="tutor-payments-title">Payment Details</h1>

            <div className="tutor-payments-header">
                <div className="tutor-payments-summary">
                    <div className="tutor-payments-balance">
                        <h3>Current Balance</h3>
                        <div className="balance-amount">$525.00</div>
                        <button className="withdraw-button" disabled={!isEditMode}>
                            <i className="fas fa-money-bill-wave"></i> Withdraw Funds
                        </button>
                    </div>
                </div>
            </div>

            <div className="tutor-payments-form">
                <form onSubmit={handleSubmit}>
                    <div className="edit-button-container">
                        <button 
                            type="button" 
                            className={`edit-mode-button ${isEditMode ? 'active' : ''}`}
                            onClick={() => setIsEditMode(!isEditMode)}
                        >
                            <i className="fas fa-edit"></i>
                            {isEditMode ? 'Cancel Edit' : 'Edit Payment Details'}
                        </button>
                    </div>

                    <div className="form-section">
                        <h3>
                            <i className="fas fa-wallet"></i> PAYMENT METHOD
                        </h3>
                        <div className="form-section-content">
                            <div className="payment-method-selector">
                                <div className="btn-group" role="group">
                                    <button
                                        type="button"
                                        className={`btn payment-method-btn ${paymentMethod === 'bank' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('bank')}
                                        disabled={!isEditMode}
                                    >
                                        <i className="fas fa-university"></i> Bank Account
                                    </button>
                                    <button
                                        type="button"
                                        className={`btn payment-method-btn ${paymentMethod === 'paypal' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('paypal')}
                                        disabled={!isEditMode}
                                    >
                                        <i className="fab fa-paypal"></i> PayPal
                                    </button>
                                </div>
                            </div>

                            {paymentMethod === 'bank' ? (
                                <div className="bank-details">
                                    <div className="form-group">
                                        <label>
                                            <i className="fas fa-user"></i> Account Name
                                        </label>
                                        <input
                                            type="text"
                                            name="accountName"
                                            value={formData.accountName}
                                            onChange={handleInputChange}
                                            placeholder="Enter account holder name"
                                            disabled={!isEditMode}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>
                                                <i className="fas fa-university"></i> BSB
                                            </label>
                                            <input
                                                type="text"
                                                name="bsb"
                                                value={formData.bsb}
                                                onChange={handleInputChange}
                                                placeholder="Enter BSB number"
                                                disabled={!isEditMode}
                                                className="form-control"
                                                maxLength="6"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>
                                                <i className="fas fa-credit-card"></i> Account Number
                                            </label>
                                            <input
                                                type="text"
                                                name="accountNumber"
                                                value={formData.accountNumber}
                                                onChange={handleInputChange}
                                                placeholder="Enter account number"
                                                disabled={!isEditMode}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="paypal-details">
                                    <div className="form-group">
                                        <label>
                                            <i className="fas fa-envelope"></i> PayPal Email
                                        </label>
                                        <input
                                            type="email"
                                            name="paypalEmail"
                                            value={formData.paypalEmail}
                                            onChange={handleInputChange}
                                            placeholder="Enter PayPal email address"
                                            disabled={!isEditMode}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            )}
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

            <div className="form-section">
                <h3>
                    <i className="fas fa-history"></i> TRANSACTION HISTORY
                </h3>
                <div className="form-section-content">
                    <div className="transaction-list">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map(transaction => (
                                        <tr key={transaction.id}>
                                            <td>{new Date(transaction.date).toLocaleDateString()}</td>
                                            <td>{transaction.description}</td>
                                            <td>${transaction.amount.toFixed(2)}</td>
                                            <td>{getStatusBadge(transaction.status)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TutorPaymentDetails;
