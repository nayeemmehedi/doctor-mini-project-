import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FaArtstation } from "react-icons/fa"


const Navbar = () => {


  let user = JSON.parse(localStorage.getItem("user"));

  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };




  return (


    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><FaArtstation /> <span style={{ fontFamily: "Besley" }}>MENTAL</span> <span style={{ color: "#303f9f", fontFamily: "Besley" }}> ENERGY </span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 m-4">
              <li class="nav-item mx-2">
                <Link to="/" class="nav-link active" aria-current="page" ><span style={{ fontFamily: "Besley" }}>Home</span></Link>
              </li>


              <li class="nav-item mx-2">
                <Link to="/time_table" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>Time Table</span></Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/services" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>Doctor</span></Link>
              </li>
              <li class="nav-item mx-2">
                <Link to="/services3" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>Stuff Member</span></Link>
              </li>
              <li class="nav-item mx-2">
                <Link to="/about" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>About</span></Link>
              </li>
              <li class="nav-item mx-2">
                <Link to="/login" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>Log In</span></Link>
              </li>
              {localStorage.getItem("user") ? (
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href
                  >
                    {(user && user.name) || user.displayName || user.email}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href onClick={logout}>
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : null}

            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;