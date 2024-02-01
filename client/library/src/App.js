// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Book from './components/books'

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Book />
    </>
  );
}

export default App;
