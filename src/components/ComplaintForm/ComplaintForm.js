// ComplaintForm.js
import React, { useState } from 'react';
import './ComplaintForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMapMarkerAlt, faBoxOpen, faFileAlt, faComments } from '@fortawesome/free-solid-svg-icons';

const ComplaintForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        referenceNumber: '',
        fullName: '',
        contactNumber: '',
        email: '',
        address: '',
        preferredContact: '',
        productName: '',
        batchNumber: '',
        dateOfPurchase: '',
        placeOfPurchase: '',
        natureOfComplaint: [],
        complaintDetails: '',
        actionTaken: '',
        requestedResolution: '',
        attachments: null,
        customerSignature: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => {
                const updatedNature = checked
                    ? [...prevData.natureOfComplaint, value]
                    : prevData.natureOfComplaint.filter((item) => item !== value);
                return { ...prevData, natureOfComplaint: updatedNature };
            });
        } else if (type === 'file') {
            setFormData({ ...formData, attachments: e.target.files });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            date: '',
            referenceNumber: '',
            fullName: '',
            contactNumber: '',
            email: '',
            address: '',
            preferredContact: '',
            productName: '',
            batchNumber: '',
            dateOfPurchase: '',
            placeOfPurchase: '',
            natureOfComplaint: [],
            complaintDetails: '',
            actionTaken: '',
            requestedResolution: '',
            attachments: null,
            customerSignature: '',
        });
    };

    return (
        <div className="form-container">
            <h2>MEBIUT Ltd – Kenyane Tastie</h2>
            <h3>Customer Complaint Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="date">Date of Complaint:</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="referenceNumber">Complaint Reference Number:</label>
                    <input type="text" id="referenceNumber" name="referenceNumber" value={formData.referenceNumber} onChange={handleChange} />
                </div>

                <h4>Customer Information:</h4>
                <div className="form-group">
                    <label htmlFor="fullName">
                        <FontAwesomeIcon icon={faUser} /> Full Name:
                    </label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNumber">
                        <FontAwesomeIcon icon={faPhone} /> Contact Number:
                    </label>
                    <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        <FontAwesomeIcon icon={faEnvelope} /> Email Address:
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Address:
                    </label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Preferred Contact Method:</label>
                    <label>
                        <input type="radio" name="preferredContact" value="Phone" onChange={handleChange} /> Phone
                    </label>
                    <label>
                        <input type="radio" name="preferredContact" value="Email" onChange={handleChange} /> Email
                    </label>
                    <label>
                        <input type="radio" name="preferredContact" value="Other" onChange={handleChange} /> Other (Specify): 
                        <input type="text" onChange={handleChange} />
                    </label>
                </div>

                <h4>Product Information:</h4>
                <div className="form-group">
                    <label htmlFor="productName">
                        <FontAwesomeIcon icon={faBoxOpen} /> Product Name:
                    </label>
                    <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="batchNumber">Batch Number:</label>
                    <input type="text" id="batchNumber" name="batchNumber" value={formData.batchNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dateOfPurchase">Date of Purchase:</label>
                    <input type="date" id="dateOfPurchase" name="dateOfPurchase" value={formData.dateOfPurchase} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="placeOfPurchase">Place of Purchase:</label>
                    <input type="text" id="placeOfPurchase" name="placeOfPurchase" value={formData.placeOfPurchase} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Nature of Complaint:</label>
                    <label>
                        <input type="checkbox" value="Product Quality" onChange={handleChange} /> Product Quality
                    </label>
                    <label>
                        <input type="checkbox" value="Packaging Issues" onChange={handleChange} /> Packaging Issues
                    </label>
                    <label>
                        <input type="checkbox" value="Customer Service" onChange={handleChange} /> Customer Service
                    </label>
                    <label>
                        <input type="checkbox" value="Delivery/Logistics" onChange={handleChange} /> Delivery/Logistics
                    </label>
                    <label>
                        <input type="checkbox" value="Other" onChange={handleChange} /> Other (Please specify): 
                        <input type="text" onChange={handleChange} />
                    </label>
                </div>

                <h4>Details of Complaint:</h4>
                <div className="form-group">
                    <label htmlFor="complaintDetails">
                        <FontAwesomeIcon icon={faComments} /> Details of Complaint:
                    </label>
                    <textarea
                        id="complaintDetails"
                        name="complaintDetails"
                        value={formData.complaintDetails}
                        onChange={handleChange}
                        required
                        placeholder="Please describe your issue in detail."
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="actionTaken">Action Taken by Customer (if any):</label>
                    <input type="text" id="actionTaken" name="actionTaken" value={formData.actionTaken} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Requested Resolution:</label>
                    <label>
                        <input type="radio" name="requestedResolution" value="Replacement" onChange={handleChange} /> Replacement
                    </label>
                    <label>
                        <input type="radio" name="requestedResolution" value="Refund" onChange={handleChange} /> Refund
                    </label>
                    <label>
                        <input type="radio" name="requestedResolution" value="Apology/Compensation" onChange={handleChange} /> Apology/Compensation
                    </label>
                    <label>
                        <input type="radio" name="requestedResolution" value="Other" onChange={handleChange} /> Other (Specify): 
                        <input type="text" onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="attachments">
                        <FontAwesomeIcon icon={faFileAlt} /> Attachments (if any):
                    </label>
                    <input type="file" id="attachments" name="attachments" onChange={handleChange} multiple />
                </div>
                <div className="form-group">
                    <label htmlFor="customerSignature">Signature of Customer:</label>
                    <input type="text" id="customerSignature" name="customerSignature" value={formData.customerSignature} onChange={handleChange} />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default ComplaintForm;
