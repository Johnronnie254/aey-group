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
import AuthorId from './components/AuthorId';
import BookId from './components/BookId';



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
          <Route path="/Author" element = {<AddAuthor/>} />
          <Route path="/Book" element = {<AddBook/>} />
          <Route path="/Authors/:id" element = {<AuthorId/>} />
          <Route path="/Book/:id" element = {<BookId/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
