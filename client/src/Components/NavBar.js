import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutBtn from "./LougoutButton";


const NavBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        background: "white",
        width: "100%",
        zIndex: "10",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item style={{ padding: 16 }} >
          <Link to="/dashbord">HOME</Link>
        </Nav.Item>
        <Nav.Item style={{ padding: 16 }} >
          <Link to="/publication">PUBLICATION</Link>
        </Nav.Item>
      </Nav>
      <LogoutBtn />

    </div>
  );
};

export default NavBar;
