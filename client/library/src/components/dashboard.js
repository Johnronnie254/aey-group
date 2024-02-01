import React from 'react';
import './Dashboard.css'; 

function Dashboard() {
  return (
    <div className="dashboard">
      <input type='search' className="form-control" placeholder='Search by author'/>
      <h1 className="main-heading">ARE YOU SEARCHING FOR A BOOK ...?</h1>
      <h1 className="sub-heading">AEY-GROUP</h1>
      <h2>VIRTUAL LIBRARY</h2>
      <p>We understand the need to study from the comfort of your room. Worry no more. We provide you with the opportunity to have access to thousands of books</p>
    </div>
  );
}

export default Dashboard;
