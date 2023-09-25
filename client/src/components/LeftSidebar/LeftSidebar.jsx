import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
import school from "../../assets/school.svg" ; 
import tags from "../../assets/tags.svg" ; 
import users from "../../assets/users.svg" ; 
import questionmark from "../../assets/questionmark.svg"

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };
  // const now = new Date() ; 
  // const today  = now.getDate() ; 
  // const month = now.getMonth() ; 
  // const year = now.getFullYear() ; 

  // const hours = now.getHours();
  // const minutes = now.getMinutes();
  // const seconds = now.getSeconds();


  return (
    <div
      className="left-sidebar"
      style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className="side-nav">
        <button onClick={() => handleSlideIn()} className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
            >
              {/* <img src={Globe} alt="Globe" /> */}
              <img style = {{height:"25px"}}src={questionmark} alt="tags" />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <img style = {{height:"25px"}}src={tags} alt="tags" />
              <p style={{ paddingLeft: "10px" }}>Tags</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <img style = {{height:"25px"}}src={users} alt="users" />
              <p style={{ paddingLeft: "10px" }}>Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
