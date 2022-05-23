import React from "react";
import SideBarItem from "./SideBarItem";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";
import FlagRoundedIcon from "@material-ui/icons/FlagRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import VideoLibraryRoundedIcon from "@material-ui/icons/VideoLibraryRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import "./SideBar.scss";

export default function SideBar({ photoUrl, username }) {
  return (
    <div className="sideBar">
      <SideBarItem src={photoUrl} title={username} />
      {rowIconList.map(({ Icon, title }, index) => (
        <SideBarItem key={index} title={title} Icon={Icon} />
      ))}
    </div>
  );
}

const rowIconList = [
  {
    Icon: LocalHospitalRoundedIcon,
    title: "COVID-19 Information Center",
  },
  {
    Icon: FlagRoundedIcon,
    title: "Pages",
  },
  {
    Icon: GroupRoundedIcon,
    title: "Friends",
  },
  {
    Icon: ChatRoundedIcon,
    title: "Messenger",
  },
  {
    Icon: StorefrontRoundedIcon,
    title: "Marketplace",
  },
  {
    Icon: VideoLibraryRoundedIcon,
    title: "Videos",
  },
];
