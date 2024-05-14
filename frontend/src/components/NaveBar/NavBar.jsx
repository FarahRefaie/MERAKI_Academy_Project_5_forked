import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { AuthContext } from "../../contexts/authContext";
import { setLogout } from "../redux/reducers/auth";
//===============================================================

const NavBar = () => {
 

  //===============================================================

  return (
    <>
      <div className="NavBar">
        {isLoggedIn ? (
          <>
            <Link className="Link" to="/dashboard">
              Home
            </Link>
            <Link className="Link" to="/newArticle">
              Add New Article
            </Link>
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="Link" to="/">
              Register
            </Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
