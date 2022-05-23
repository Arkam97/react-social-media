import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.scss";

export default function Story({ storyImage, profilePic, username }) {
  return (
    <div
      className="story"
      style={{
        backgroundImage: `url(${storyImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Avatar src={profilePic} className="storyAvatar" />
      <h4>{username}</h4>
    </div>
  );
}
