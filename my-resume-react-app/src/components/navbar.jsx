import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
  
  const NavBar = () => {
    return (
      <div>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/work">WORK</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    );
  };
  
  export default NavBar;
  


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useParams,
// } from "react-router-dom";
// import React from "react";

// function NavBar() {
//   <>
//     return (<h2 className="home-text">HOME</h2>
//     <h2 className="about-text">ABOUT</h2>
//     <h2 className="work-text">WORK</h2>
//     <h2 className="blog-text">BLOG</h2>
//     <h2 className="contact-text">CONTACT</h2>)
//   </>;
// }

// export default NavBar;
