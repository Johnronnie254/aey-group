// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Book from './components/books'
import AboutUs from './components/Aboutus';
import Author from './components/Authors';
import AddAuthor from './components/AddAuthor';
import AddBook from './components/AddBook';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<Book />} />
          <Route path="/Aboutus" element = {<AboutUs/>} />
          <Route path="/Authors" element = {<Author/>} />
          <Route path="/AddAuthor" element = {<AddAuthor/>} />
          <Route path="/AddBook" element = {<AddBook/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
