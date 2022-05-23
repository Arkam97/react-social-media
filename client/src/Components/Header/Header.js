import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SubscriptionsRoundedIcon from "@material-ui/icons/SubscriptionsRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import "./Header.scss";
import { Avatar, IconButton } from "@material-ui/core";

export default function Header({ imageUrl, userName }) {
  return (
    <div className="header">
      <div className="headerLeft">
        <img
          src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
          alt="fb logo"
          className="logo"
        />
        <div className="searchInput">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Search" className="inputBar" />
        </div>
      </div>

      <div className="headerCenter">
        <div className="activeOption">
          <HomeRoundedIcon fontSize="large" className="icon" />
        </div>
        <div className="option">
          <SubscriptionsRoundedIcon fontSize="large" className="icon" />
        </div>
        <div className="option">
          <StorefrontRoundedIcon fontSize="large" className="icon" />
        </div>
        <div className="option">
          <SupervisedUserCircleRoundedIcon fontSize="large" className="icon" />
        </div>
      </div>

      <div className="headerRight">
        <div className="info">
          <Avatar src={imageUrl} />
          <h4>{userName}</h4>
        </div>
        <IconButton>
          <AddRoundedIcon />
        </IconButton>
        <IconButton>
          <NotificationsRoundedIcon />
        </IconButton>
        <IconButton>
          <ExitToAppRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}
