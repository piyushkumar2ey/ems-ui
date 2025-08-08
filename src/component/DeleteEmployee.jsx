import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EmployeeDelete() {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState('');
  const [employee, setEmployee] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/employee/${employeeId}`);
      setEmployee(response.data);
      setMessage('');
    } catch (error) {
      setEmployee(null);
      setMessage('Employee not found');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/employee/${employeeId}`);
      setMessage(`Employee ID ${employeeId} deleted successfully.`);
      setEmployee(null);
      setEmployeeId('');
    } catch (error) {
      setMessage('Failed to delete employee');
    }
  };

    const homeHandlerClick = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Delete Employee by ID</h2>

      <input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Enter Employee ID"
      />
      <button onClick={handleSearch}>Search</button>

      {employee && (
        <div style={{ marginTop: '20px' }}>
          <h3>Employee Details</h3>
          <b>ID:</b>{employee.employeeId}
          <b>, Name:</b>{employee.firstName} {employee.lastName}
          <b>, Location:</b>{employee.location}
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}

      {message && <p style={{ marginTop: '20px', color: 'red' }}>{message}</p>}
      <div>
        <button onClick={homeHandlerClick}>Home</button>
      </div>
    </div>
  );
}

export default EmployeeDelete;
