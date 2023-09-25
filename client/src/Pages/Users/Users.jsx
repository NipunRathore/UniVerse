import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400", fontFamily:"Orbitron" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};
  // font-family: 'Orbitron', sans-serif; 
  /* font-family: 'Prompt', sans-serif; */
  /* font-family: 'Merriweather', serif; */
  /* font-family: 'Press Start 2P', cursive; */
  // font-family: 'Pontano Sans', sans-serif;

export default Users;
