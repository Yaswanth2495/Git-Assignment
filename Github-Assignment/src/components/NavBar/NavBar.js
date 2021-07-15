import React from "react";

import "./NavBar.css";

const Navbar = ({ user }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <img
      src="https://scontent.fmaa1-3.fna.fbcdn.net/v/t1.6435-9/67787568_1455830591240470_478656057686622208_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=B8JrDWdOvVkAX9BMS46&_nc_ht=scontent.fmaa1-3.fna&oh=851d899eb2d4a459aebfb12de8f58879&oe=60D4A62A"
      width="50"
      height="50"
      className="mr-3 avatar"
      alt="user"
    />
    <h3 style={{ color: "white" }}>code with yashu</h3>

    <img src="../../../public/logo.png" alt="" />

    <a className="ml-auto d-flex align-items-center" href="/">
      Search Other User
    </a>
  </nav>
);

export default Navbar;
