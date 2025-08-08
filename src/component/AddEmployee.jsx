import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    employeeId: '',
    location: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const resetHandlerClick = () => {

    setEmployee({
      firstName: '',
      lastName: '',
      employeeId: '',
      location: ''
    });
  };

  const homeHandlerClick = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Employee Submitted:', employee);
    //Call API or service to save employee
    try {
      const response = await axios.post('http://localhost:8080/employee', employee);
      console.log('Employee added:', response.data);
      alert('Employee added successfully!');
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Failed to add employee.');
    }
    // Reset form
    setEmployee({
      firstName: '',
      lastName: '',
      employeeId: '',
      location: ''
    });
  };

  return (
    <div className="employee-form">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            name="employeeId"
            value={employee.employeeId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={employee.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit">Save</button>
          <button onClick={resetHandlerClick}>Reset</button>
          <button onClick={homeHandlerClick}>Home</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
