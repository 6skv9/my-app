import React from "react";
import { Menu,Container, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Menu  inverted
    fixed="top"
     borderless
      style={{
      backgroundColor: "#1b1c1d", 
      padding: "0.8em 0",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    }}>
    <Container style={{ display: "flex", justifyContent: "space-between" }}>
      <Menu.Item as={Link} to="/" header>
        <Icon name="cubes" color="teal" 
        size="large" 
        style={{ marginRight: "0.5em" }} />
        <span style={{ fontSize: "1.4em",
        fontWeight: "bold", color: "white" }}>
          StockeX
        </span>
        </Menu.Item>
      <Menu.Menu position="left" style={{ gap: "3em", display: "flex" }}>
    
      <Menu.Item as={Link} to="/" style={{ color: "white", fontSize: "1.1em" }}>
      Home
      </Menu.Item>
      <Menu.Item as={Link} to="/products" style={{ color: "white", fontSize: "1.1em" }}>
      Products
      </Menu.Item>
      <Menu.Item as={Link}to="/contact" style={{ color: "white", fontSize: "1.1em" }}>
       Contact
       </Menu.Item>

      </Menu.Menu>

    </Container>

  </Menu>
);

export default Navbar;
