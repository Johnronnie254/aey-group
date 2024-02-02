**Virtual Library**
This is a full-stack book store management application built with Flask (backend) and React (frontend). The AEY-GROUP Virtual Library, a simple website platform designed for effortless library monitoring and management. As a library staff member, you have the power to seamlessly explore our extensive collection of books and manage author details with ease. This platform offers an intuitive interface, allowing you to add new books and author information effortlessly. Gain quick insights into individual authors and books, streamlining your library management tasks. AEY-GROUP Virtual Library aims to provide a user-friendly and efficient experience, ensuring that library staff can navigate, monitor, and manage the virtual library effortlessly.

**Table of Contents**

Installation
Usage
Endpoints
License

**Installation**

Clone the repository:

git clone https://github.com/Johnronnie254/aey-group

############cd aey-group
Backend Setup:

cd: app
Create a virtual environment: Pipenv install && pipenv shell
Making sure you are on app directory:
Install dependencies: pip install flask, flask_migrate, flask_sqlalchemy, flask_cors, faker

Apply migrations and seed the database:

flask db init
flask db migrate
flask db upgrade
python seed.py
Run the backend server: python3 app.py

Frontend Setup:
/****IMPORTANT***/
cd client
cd library

/***After cd into client then cd into the directory library**/
Install dependencies:

npm install
Run the frontend server:
npm start
Open your browser and navigate to http://localhost:3000 to access the application.

**Usage**
The backend server runs on http://localhost:5000.
The frontend server runs on http://localhost:3000.
**Endpoints**

Backend Endpoints:

Dashboard: http://localhost:5000/
Get Books: http://localhost:5000/books
Get Book by ID: http://localhost:5000/book/{id}
Get Authors: http://localhost:5000/authors
Get Author by ID: http://localhost:5000/authors/{id}
Create Author: http://localhost:5000/author
Create Book: http://localhost:5000/book

Frontend Routes:

Home: http://localhost:3000/
Books: http://localhost:3000/books
Authors: http://localhost:3000/authors
Add Book: http://localhost:3000/Book
Add Author: http://localhost:3000/Author
Author Details: http://localhost:3000/Authors/:id
Book Details: http://localhost:3000/Book/:id
Create Author: http://localhost:5000/author
Create Book: http://localhost:5000/book

License
This project is licensed under the MIT License - see the LICENSE file for details.


