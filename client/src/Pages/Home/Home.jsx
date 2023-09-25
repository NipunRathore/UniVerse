import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
// import main from "../../components/main" ; 

const Home = ({ slideIn }) => {
  return (
    <div>
      {/* <main /> */}
      <div className="home-container-1">

        <LeftSidebar slideIn={slideIn} />
        <div className="home-container-2">
          <HomeMainbar />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
