import React, { useState } from "react";
import '../assets/css/jobApplicationForm.css';
import HeaderLogo from '../assets/images/header-logo.jpg';

export const JobApplicationForm = () => {

    const [formData, setFormData] = useState({
        groupOfCompany: '',
        location: '',
        employmentType: '',
        department: '',
        positionApplying: '',
        reference: '',
        keySkill: '',
        otherSkills: '',
        willingnessRelocate: '',
        modeOfTransport: '',
        officeDistance: '',
        releaseLetter: '',
        releaseLetterFile:'',
        firstName: '',
        lastName: '',
        phone: '',
        dob: '',
        gender: '',
        email: '',
        highestEducation: '',
        passingYear: '',
        currentSalaryBasic: '',
        currentSalaryInhand: '',
        currentSalaryEsi: '',
        currentSalaryPf: '',
        currentSalaryCtc: '',
        expectedSalaryBasic: '',
        expectedSalaryInhand: '',
        expectedSalaryEsi: '',
        expected_salary_pf: '',
        expectedSalaryCtc: '',
        noticePeriod: '',
        expectedJoiningDate: '',
        eirjp: '',
        experience: '',
        akorwitc: '',
        lastMonthSalarySlip: null,
        resume: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    
    const handleClear = () => {
        setFormData({
            groupOfCompany: '',
            location: '',
            employmentType: '',
            department: '',
            positionApplying: '',
            reference: '',
            keySkill: '',
            otherSkills: '',
            willingnessRelocate: '',
            modeOfTransport: '',
            officeDistance: '',
            releaseLetter: '',
            releaseLetterFile:'',
            firstName: '',
            lastName: '',
            phone: '',
            dob: '',
            gender: '',
            email: '',
            passingYear: '',
            highestEducation: '',
            currentSalaryBasic: '',
            currentSalaryInhand: '',
            currentSalaryEsi: '',
            currentSalaryPf: '',
            currentSalaryCtc: '',
            expectedSalaryBasic: '',
            expectedSalaryInhand: '',
            expectedSalaryEsi: '',
            expected_salary_pf: '',
            expectedSalaryCtc: '',
            noticePeriod: '',
            expectedJoiningDate: '',
            eirjp: '',
            experience: '',
            akorwitc: '',
            lastMonthSalarySlip: null,
            resume: null
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    

    return (
        <>
            <div className="page-container">
                <div className="container-fluid">
                    {/* Logo Section - Larger */}
                    <div className="logo-container">
                        <img
                            src={HeaderLogo}
                            alt="Cortex Construction Solutions"
                            className="logo"
                        />

                    </div>

                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="custom-card">
                                <div className="custom-card-header">

                                    <div className="card-header-subtitle">
                                        Please fill up the form
                                    </div>
                                    <div className="card-header-subtitle">
                                        <i className="bi bi-info-circle"></i>
                                        Please fill all the required fields marked with <span className="required-star">*</span>
                                    </div>
                                </div>

                                <div className="custom-card-body">
                                    <form onSubmit={handleSubmit}>

                                        {/* Group of Company, Location, Employment Type, Department */}
                                        <div className="row row-four-columns row-spacing">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Group of Company <span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="groupOfCompany"
                                                        value={formData.groupOfCompany}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="company1">Cortex Construction</option>
                                                        <option value="company2">Cortex Infrastructure</option>
                                                        <option value="company3">Cortex Engineering</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Location <span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="location"
                                                        value={formData.location}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="kolkata">Kolkata</option>
                                                        <option value="delhi">Delhi</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Employment Type <span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="employmentType"
                                                        value={formData.employmentType}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="fulltime">Full Time</option>
                                                        <option value="parttime">Part Time</option>
                                                        <option value="contract">Contract</option>
                                                        <option value="internship">Internship</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Department <span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="department"
                                                        value={formData.department}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="engineering">Engineering</option>
                                                        <option value="structural">Structural Audit</option>
                                                        <option value="construction">Construction</option>
                                                        <option value="design">Design</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Position Applying For, Reference, Key Skill related to job profile */}
                                        <div className="row row-four-columns row-spacing">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Position Applying For<span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="positionApplying"
                                                        value={formData.positionApplying}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="structural_engineer">Structural Engineer</option>
                                                        <option value="audit_specialist">Audit Specialist</option>
                                                        <option value="site_engineer">Site Engineer</option>
                                                        <option value="project_manager">Project Manager</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Reference
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-custom"
                                                        name="reference"
                                                        placeholder="Reference name"
                                                        value={formData.reference}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Key Skill related to job profile<span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="keySkill"
                                                        value={formData.keySkill}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="structural_analysis">Structural Analysis</option>
                                                        <option value="audit">Structural Audit</option>
                                                        <option value="design">Structural Design</option>
                                                        <option value="project_management">Project Management</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Other Skills, Willingness to Relocate, Mode of Transport */}
                                        <div className="row row-four-columns row-spacing">

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Other Skills
                                                    </label>

                                                    <select
                                                        className="form-select select-custom"
                                                        name="otherSkills"
                                                        value={formData.otherSkills}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="structural_analysis">Structural Analysis</option>
                                                        <option value="audit">Structural Audit</option>
                                                        <option value="design">Structural Design</option>
                                                        <option value="project_management">Project Management</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Willingness to Relocate <span className="required-star">*</span>
                                                    </label>

                                                    <select
                                                        className="form-select select-custom"
                                                        name="willingnessRelocate"
                                                        value={formData.willingnessRelocate}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="kolkata">Kolkata</option>
                                                        <option value="delhi">Delhi</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Mode of Transport
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="modeOfTransport"
                                                        value={formData.modeOfTransport}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="kolkata">Kolkata</option>
                                                        <option value="delhi">Delhi</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Office Distance to residence, Release Letter previous employment */}
                                        <div className="row row-four-columns row-spacing">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Office Distance to residence
                                                    </label>

                                                    <select
                                                        className="form-select select-custom"
                                                        name="officeDistance"
                                                        value={formData.officeDistance}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="1">1 Km</option>
                                                        <option value="5">5 Km</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Previous employment release Letter <span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="releaseLetter"
                                                        value={formData.releaseLetter}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="1">Available</option>
                                                        <option value="0">Not Available</option>

                                                    </select>

                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Release Letter
                                                    </label>
                                                    <input
                                                        type="file"
                                                        className="file-input-custom"
                                                        name="releaseLetterFile"
                                                        onChange={handleChange}
                                                        accept=".pdf,.jpg,.jpeg,.png"
                                                    />
                                                    <div className="helper-text">
                                                        <i className="bi bi-info-circle"></i>
                                                        PDF, JPG, PNG (Max 5MB)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* First Name, Last Name, Email, Mobile No */}
                                        <div className="row row-four-columns row-spacing">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        First Name <span className="required-star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-custom"
                                                        name="firstName"
                                                        placeholder="First name"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Last Name <span className="required-star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-custom"
                                                        name="lastName"
                                                        placeholder="Last name"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>



                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Email ID <span className="required-star">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-custom"
                                                        name="email"
                                                        placeholder="Email address"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Mobile No <span className="required-star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-custom"
                                                        name="phone"
                                                        placeholder="Mobile No"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Date Of Birth, Gender, Highest Education, Passing Year */}
                                        <div className="row row-four-columns row-spacing">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Date Of Birth
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="form-control form-control-custom"
                                                        name="dob"
                                                        value={formData.dob}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Gender <span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="gender"
                                                        value={formData.gender}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Highest Education <span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="highestEducation"
                                                        value={formData.highestEducation}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="diploma">Diploma</option>
                                                        <option value="bachelors">Bachelor's</option>
                                                        <option value="masters">Master's</option>
                                                        <option value="phd">PhD</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Passing Year <span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="passingYear"
                                                        value={formData.passingYear}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="diploma">2017</option>
                                                        <option value="bachelors">2018</option>
                                                        <option value="masters">2019</option>
                                                        <option value="phd">2020</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Current Salary Basic, Inhabd, ESI, PF, CTC*/}
                                        <hr />
                                        <div className="section-badge" style={{ marginTop: ' 0px' }}>
                                            Current Salary
                                        </div>
                                        <div className="row row-four-columns row-spacing">

                                            <div className="col-lg-2 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Basic
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text input-group-text-custom">₹</span>
                                                        <input
                                                            type="number"
                                                            className="form-control form-control-custom"
                                                            name="currentSalaryBasic"
                                                            placeholder="Amount"
                                                            value={formData.currentSalaryBasic}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Inhand
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text input-group-text-custom">₹</span>
                                                        <input
                                                            type="number"
                                                            className="form-control form-control-custom"
                                                            name="currentSalaryInhand"
                                                            placeholder="Amount"
                                                            value={formData.currentSalaryInhand}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        ESI
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text input-group-text-custom">₹</span>
                                                        <input
                                                            type="number"
                                                            className="form-control form-control-custom"
                                                            name="currentSalaryEsi"
                                                            placeholder="Amount"
                                                            value={formData.currentSalaryEsi}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        PF
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text input-group-text-custom">₹</span>
                                                        <input
                                                            type="number"
                                                            className="form-control form-control-custom"
                                                            name="currentSalaryPf"
                                                            placeholder="Amount"
                                                            value={formData.currentSalaryPf}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        CTC
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text input-group-text-custom">₹</span>
                                                        <input
                                                            type="number"
                                                            className="form-control form-control-custom"
                                                            name="currentSalaryCtc"
                                                            placeholder="Amount"
                                                            value={formData.currentSalaryCtc}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        {/* Expected Salary Basic, Inhabd, ESI, PF, CTC*/}
                                        <hr />
                                        <div className="section-badge" style={{ marginTop: ' 0px' }}>
                                            Expected Salary
                                        </div>
                                        <div className="row row-four-columns row-spacing">

                                            <div className="col-lg-2 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Basic
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text input-group-text-custom">₹</span>
                                                        <input
                                                            type="number"
                                                            className="form-control form-control-custom readonly1"
                                                            name="expectedSalaryBasic"
                                                            placeholder="Amount"
                                                            readOnly
                                                            value={formData.expectedSalaryBasic}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Inhand
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text input-group-text-custom">₹</span>
                                                        <input
                                                            type="number"
                                                            className="form-control form-control-custom readonly1"
                                                            name="expectedSalaryInhand"
                                                            placeholder="Amount"
                                                            readOnly
                                                            value={formData.expectedSalaryInhand}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        ESI
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text input-group-text-custom">₹</span>
                                                        <input
                                                            type="number"
                                                            className="form-control form-control-custom readonly1"
                                                            name="expectedSalaryEsi"
                                                            placeholder="Amount"
                                                            readOnly
                                                            value={formData.expectedSalaryEsi}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        PF
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text input-group-text-custom">₹</span>
                                                        <input
                                                            type="number"
                                                            className="form-control form-control-custom readonly1"
                                                            name="expectedSalaryPf"
                                                            placeholder="Amount"
                                                            readOnly
                                                            value={formData.expectedSalaryPf}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        CTC
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text input-group-text-custom">₹</span>
                                                        <input
                                                            type="number"
                                                            className="form-control form-control-custom"
                                                            name="expectedSalaryCtc"
                                                            placeholder="Amount"
                                                            value={formData.expectedSalaryCtc}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        {/* Notice Period served, Expected date of Joining */}
                                        <div className="row row-four-columns row-spacing">

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Notice Period served (If any)
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="noticePeriod"
                                                        value={formData.noticePeriod}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="immediate">Immediate</option>
                                                        <option value="15">15 Days</option>
                                                        <option value="30">30 Days</option>
                                                        <option value="45">45 Days</option>
                                                        <option value="60">60 Days</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6"></div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Expected date of Joining
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="form-control form-control-custom"
                                                        name="expectedJoiningDate"
                                                        value={formData.expectedJoiningDate}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        {/* Experience in applied job profile, Total Experience, Expected date of Joining */}
                                        <div className="row row-four-columns row-spacing">

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Experience in applied job profile
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="eirjp"
                                                        value={formData.eirjp}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select Years</option>
                                                        <option value="immediate">0 - 2 Years</option>
                                                        <option value="15">2 - 5 Years</option>
                                                        <option value="30">5 - 10 Years</option>
                                                        <option value="45">10 - 15 Years</option>
                                                        <option value="60">15 - 25 Years</option>
                                                        <option value="60">25 - 40 Years</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        Total Experience
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="experience"
                                                        value={formData.experience}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select Years</option>
                                                        <option value="immediate">0 - 2 Years</option>
                                                        <option value="15">2 - 5 Years</option>
                                                        <option value="30">5 - 10 Years</option>
                                                        <option value="45">10 - 15 Years</option>
                                                        <option value="60">15 - 25 Years</option>
                                                        <option value="60">25 - 40 Years</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">
                                                        If any known / relative working here
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="akorwitc"
                                                        value={formData.akorwitc}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="1">Yes</option>
                                                        <option value="0">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>






                                        {/* Release Letter previous employment, Last Month Salary Slip(File),  */}
                                        <div className="row row-four-columns row-spacing">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        previous employment Release Letter <span className="required-star">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select select-custom"
                                                        name="releaseLetter"
                                                        value={formData.releaseLetter}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="1">Available</option>
                                                        <option value="0">Not Available</option>

                                                    </select>

                                                </div>
                                            </div>


                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Last Month Salary Slip(File)
                                                    </label>
                                                    <input
                                                        type="file"
                                                        className="file-input-custom"
                                                        name="lastMonthSalarySlip"
                                                        onChange={handleChange}
                                                        accept=".pdf,.jpg,.jpeg,.png"
                                                    />
                                                    <div className="helper-text">
                                                        <i className="bi bi-info-circle"></i>
                                                        PDF, JPG, PNG (Max 5MB)
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div className="field-container">
                                                    <label className="form-label-custom">

                                                        Resume
                                                    </label>
                                                    <input
                                                        type="file"
                                                        className="file-input-custom"
                                                        name="resume"
                                                        onChange={handleChange}
                                                        accept=".pdf,.jpg,.jpeg,.png"
                                                    />
                                                    <div className="helper-text">
                                                        <i className="bi bi-info-circle"></i>
                                                        PDF, JPG, PNG (Max 5MB)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="button-group">
                                            <button
                                                type="button"
                                                className="clear-button"
                                                onClick={handleClear}
                                            >
                                                <i className="bi bi-eraser"></i>
                                                Clear
                                            </button>
                                            <button
                                                type="submit"
                                                className="submit-button"
                                            >
                                                <i className="bi bi-check-circle"></i>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};