import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
  const aboutUsRef = useRef(null);

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <header className="top-navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="background-image">
        <h1>Welcome to our Bookstore</h1>
        <p>Discover your next favorite book</p>
        <Link to="/books">
          <button className="button explore-button">Explore Books</button>
        </Link>
      </div>
      <section ref={aboutUsRef} className="about-us">
        <h2>About Us</h2>
      </section>
      {/* ... (Other sections) */}
    </div>
  );
}

export default Home;
