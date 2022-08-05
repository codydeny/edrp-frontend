import React, { useContext } from "react";
import "./Header.css";
import { MyContext } from "../../store/Store";
import logo from "./logo.png";
import Divider from "@material-ui/core/Divider";

export default function HeaderBranding() {
  const store = React.useContext(MyContext);
  const { state, loginUser } = React.useContext(MyContext);
  React.useEffect(() => {
    store.fetchFaculties();
  }, []);
  const userName = store.state.facultyResume.name;
  const userEmail = store.state.facultyResume.email_secondary;
  return (
    <div className="HeaderBranding print-friendly">
      <div className="headerLogoDiv">
        {" "}
        <img src={logo} className="logo" />
      </div>
      <div className="headerTitleDiv">
        <div className="headerTitle">
          Hemvati Nandan Bahuguna Garhwal University
        </div>
        <div className="headerSubtitle">
          <div className="solid leftLine"></div> A Central University{" "}
          <div className="solid rightLine"> </div>
        </div>
      </div>
      {store.state.user.type === "FACULTY" ? (
        <div className="userType">{store.state.user.type}</div>
      ) : (
        <div className="userType">{store.state.user.type}</div>
      )}
    </div>
  );
}
