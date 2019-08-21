import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = props => {
  // console.log(props);
  return (
    <div>
      <Navbar style={{ width: 1100 }} bg="light" expand="lg">
        <Navbar.Brand style={{ paddingTop: "6px", fontSize: "24px" }}>
          News-Feed
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="mr-auto">
          <Nav.Link style={{ fontSize: "16px" }}>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link style={{ fontSize: "16px" }}>
            <Link to="/like">Like</Link>
          </Nav.Link>

          <Navbar.Collapse style={{ fontSize: "16px" }} id="basic-navbar-nav">
            <NavDropdown title="Category" id="basic-nav-dropdown">
              {props.category.map((el, i) => (
                <NavDropdown.Item
                  key={i}
                  onClick={() => {
                    props.setCatFilter(el);
                  }}
                >
                  {el}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <NavDropdown title="Publisher" id="basic-nav-dropdown">
              {props.publisher.map((el, i) => ( 
                <NavDropdown.Item
                  key={i}
                  onClick={() => {
                    props.setPubFilter(el);
                  }}
                >
                  {el}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Navbar.Collapse>
          <Navbar.Brand onClick={()=>{props.sortNews()}} style={{ paddingTop: "6px", fontSize: "24px" }}>
            Sort
          </Navbar.Brand>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
