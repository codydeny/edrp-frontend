import React from "react";
import "./Header.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  return (
    <div className="Header">
      <div className="headerLeft">
        <div className="iconDiv">
          {" "}
          <a href="https://twitter.com/h_garhwal?s=20&t=N6rIwZgiBt3iHDbyvj1V6A">
            <TwitterIcon style={{ color: "white" }} />
          </a>{" "}
        </div>
        <div className="iconDiv">
          {" "}
          <a href="https://www.youtube.com/c/HNBGarhwalUniversitySrinagarGarhwal/">
            <YouTubeIcon style={{ color: "white" }} />
          </a>{" "}
        </div>
        <div className="iconDiv">
          {" "}
          <a href="https://www.facebook.com/HnbGarhwalUniversityShrinagarUttaranchal/">
            <FacebookIcon style={{ color: "white" }} />
          </a>{" "}
        </div>
      </div>
      <div className="centerText"> IQAC</div>
      <div className="headerRight">
        <div className="iconDiv">
          {" "}
          <Brightness4Icon />{" "}
        </div>
        <div className="iconDiv translationText"> अ </div>
        <div className="iconDiv">
          {" "}
          <SearchIcon />{" "}
        </div>
      </div>
    </div>
  );
}
