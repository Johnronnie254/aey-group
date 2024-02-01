
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            Welcome to our Virtual Library! We are passionate about bringing the
            joy of reading to everyone, anywhere, anytime. Our mission is to
            create a digital space where book enthusiasts can explore a vast
            collection of books from various genres.
          </p>
          <p>
            Whether you're a student, a professional, or simply someone who
            loves to dive into the world of literature, our virtual library is
            designed to cater to your reading needs. Discover new authors,
            explore different genres, and embark on literary adventures without
            leaving the comfort of your home.
          </p>
          <p>
            At our Virtual Library, we believe in the power of knowledge and the
            magic of storytelling. Join us in this journey to make reading
            accessible to all, fostering a community bound by the love of
            books.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://culturalfoundation.ae/childrenslibrary/-/media/Feature/PageContent/E-Book-CL/Online-Library-Home/online-library1.png" 
            alt="About Us"
            className="img-fluid" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
