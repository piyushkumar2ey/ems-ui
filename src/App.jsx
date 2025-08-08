import { useState } from 'react';
import './App.css';
import EmployeeHome from './component/EmployeeHome';
import AddEmployee from './component/AddEmployee';
import InquiryEmployee from './component/InquiryEmployee';
import DeleteEmployee from './component/DeleteEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (<div className='body'>
                  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeHome/>} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/inquiry" element={<InquiryEmployee />} />
          <Route path="/delete" element={<DeleteEmployee />} />
        </Routes>
      </BrowserRouter>

      </div>)
  
}

export default App
