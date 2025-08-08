
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeHome() {

    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/add');
    };

    const handleInquiryClick = () => {
        navigate('/inquiry');
    };

    const handleDeleteClick = () => {
        navigate('/delete');
    };


    return <div>
        <h1>Employee Management System</h1>
        <div className="card">
            <button onClick={handleAddClick}>Add Employee</button>
            <button onClick={handleInquiryClick}>Inquiry Employee</button>
            <button onClick={handleDeleteClick}>Delete Employee</button>
        </div>
    </div>
}

export default EmployeeHome;