import React from "react";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import "./Tags.css";
import { tagsList } from "./tagList";

const Tags = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p1">
          Tags used on UniVerse so far. 
        </p>
        <br></br>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag, index) => (
            <TagsList tag={tag} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
