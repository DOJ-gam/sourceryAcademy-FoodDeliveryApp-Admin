import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg"
              alt=""
              className="topAvatar"
            />
            Admin Dashboard
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://media-exp3.licdn.com/dms/image/C4E03AQGRDyM4U3VQ6g/profile-displayphoto-shrink_200_200/0/1538780614697?e=1631145600&v=beta&t=r-pJ7kc1SErdm-22AoF6QwFQWSuwse-yqSuhcXp7MZ0"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
