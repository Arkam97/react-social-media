import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.scss";

export default function SideBarItem({ src, title, url, Icon }) {
  return (
    <div className="sideBarRow">
      <div className="row">
        {src && <Avatar src={src} />}
        {url && <img src={url} alt="" className="image" />}
        {Icon && <Icon fontSize="large" className="rowIcon" />}
        <h4>{title}</h4>
      </div>
    </div>
  );
}
