import React from "react";
import "./Nav.css";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MyContext } from "../../store/Store";

export default function Nav() {
  const { state, logoutUser } = React.useContext(MyContext);
  return (
    <div className="Nav print-friendly">
      {!state.isLoggedIn && (
        <>
          {" "}
          <Link to="/login/" style={{ textDecoration: "none", color: "white" }}>
            <div className="navLink">
              {" "}
              <div className="navLinkText">Login</div>{" "}
            </div>
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              background: "white",
              width: "1px",
              transform: "scaleX(0.5)",
            }}
          />
        </>
      )}
      {state.isLoggedIn && state.user && state.user.type && (
        <>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              background: "white",
              width: "1px",
              transform: "scaleX(0.5)",
            }}
          />
          <div className="navLink">
            <div className="navLinkText">
              <Link
                to="/logout"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => {
                  logoutUser();
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Logout
              </Link>
            </div>
          </div>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              background: "white",
              width: "1px",
              transform: "scaleX(0.5)",
            }}
          />
          <div className="navLink">
            <div className="navLinkText">
              <Link
                to="/reset-password"
                style={{ textDecoration: "none", color: "white" }}
              >
                Reset Password
              </Link>
            </div>
          </div>
        </>
      )}
      {state.isLoggedIn &&
        state.user &&
        state.user.type &&
        (state.user.type === "DEAN" || state.user.type === "DIRECTOR") && (
          <>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                background: "white",
                width: "1px",
                transform: "scaleX(0.5)",
              }}
            />
            <div className="navLink">
              <div className="navLinkText">
                <Link
                  to="/schools"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Data Report Module
                </Link>
              </div>
            </div>
          </>
        )}
      {state.isLoggedIn &&
        state.user &&
        state.user.type &&
        state.user.type === "FACULTY" && (
          <>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                background: "white",
                width: "1px",
                transform: "scaleX(0.5)",
              }}
            />
            <Link
              to="/entity-report"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="navLink">
                {" "}
                <div className="navLinkText">Faculty Profile</div>{" "}
              </div>
            </Link>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                background: "white",
                width: "1px",
                transform: "scaleX(0.5)",
              }}
            />
            <Link
              to="/entity-entry"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="navLink">
                {" "}
                <div className="navLinkText">Faculty Profile Edit</div>{" "}
              </div>
            </Link>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                background: "white",
                width: "1px",
                transform: "scaleX(0.5)",
              }}
            />
            <Link to="/aqar" style={{ textDecoration: "none", color: "white" }}>
              <div className="navLink">
                {" "}
                <div className="navLinkText">AQAR</div>{" "}
              </div>
            </Link>
          </>
        )}

      {state.isLoggedIn &&
        state.user &&
        state.user.type &&
        state.user.type === "HOD" && (
          <>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                background: "white",
                width: "1px",
                transform: "scaleX(0.5)",
              }}
            />
            <Link
              to="/entity-report"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="navLink">
                {" "}
                <div className="navLinkText">Department Profile</div>{" "}
              </div>
            </Link>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                background: "white",
                width: "1px",
                transform: "scaleX(0.5)",
              }}
            />
            <Link
              to="/entity-entry"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="navLink">
                {" "}
                <div className="navLinkText">Department Profile Edit</div>{" "}
              </div>
            </Link>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                background: "white",
                width: "1px",
                transform: "scaleX(0.5)",
              }}
            />
            <Link to="/aqar" style={{ textDecoration: "none", color: "white" }}>
              <div className="navLink">
                {" "}
                <div className="navLinkText">AQAR</div>{" "}
              </div>
            </Link>
          </>
        )}
    </div>
  );
}
