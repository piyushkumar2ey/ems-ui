import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InquiryEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:8080/employee/allEmployee')
      .then(response => {
        setEmployees(response.data);
        setFilteredEmployees(response.data);
        setLocationData(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);


  const homeHandlerClick = () => {
    navigate("/");
  };

  const selectLocationHandler = (e) => {
    setFilteredEmployees(e.target.value);
  };

  const searchHandlerClick = async () => {

    const url = locationFilter.trim() ? 'http://localhost:8080/employee?location=' + locationFilter :
      'http://localhost:8080/employee/allEmployee';

    axios.get(url)
      .then(response => {
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  };

  return (
    <div >
      <h2>Employee List</h2>

      <div >
        <label htmlFor="location">Location: </label>

        <select
          id="location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">Show All Employee</option>
          {locationData.map(emp => (
            <option value={emp.location}>{emp.location}</option>
          ))}
        </select>
        <button onClick={searchHandlerClick}>Search</button>
      </div>

      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.employeeId}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.location}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" align="center">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <button onClick={homeHandlerClick}>Home</button>
      </div>
    </div>

  );
};

export default InquiryEmployee;
