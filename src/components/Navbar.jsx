import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { VscTools } from "react-icons/vsc";
import { HiOutlinePhoto } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // To control whether icons should be displayed
  const showIcons = true; // Change this to 'true' or 'false' to toggle icons

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  
  // return (
  //   <Navbar
  //     expanded={expand}
  //     fixed="top"
  //     expand="md"
  //     className={navColour ? "sticky" : "navbar"}
  //   >
  //     <Container>
  //       <Navbar.Brand href="/" className="d-flex">
  //         <span className="brand-title">Sirius's Portfolio</span>
  //       </Navbar.Brand>
  //       <Navbar.Toggle
  //         aria-controls="responsive-navbar-nav"
  //         onClick={() => {
  //           updateExpanded(expand ? false : "expanded");
  //         }}
  //       />
  //       <Navbar.Collapse id="responsive-navbar-nav">
  //         <Nav className="ms-auto">
  //           <Nav.Item>
  //             <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
  //               {/* Conditional rendering of icon */}
  //               {showIcons && (
  //                 <AiOutlineHome style={{ marginBottom: "5px", marginRight: "3px" }} />
  //               )}
  //               Home
  //             </Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item>
  //             <Nav.Link as={Link} to="#about" onClick={() => updateExpanded(false)}>
  //               {showIcons && (
  //                 <AiOutlineUser style={{ marginBottom: "5px", marginRight: "3px" }} />
  //               )}
  //               About
  //             </Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item>
  //             <Nav.Link as={Link} to="/skills" onClick={() => updateExpanded(false)}>
  //               {showIcons && (
  //                 <VscTools style={{ marginBottom: "5px", marginRight: "3px" }} />
  //               )}
  //               Skills
  //             </Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item>
  //             <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
  //               {showIcons && (
  //                 <AiOutlineFundProjectionScreen
  //                   style={{ marginBottom: "2px", marginRight: "3px" }}
  //                 />
  //               )}
  //               Projects
  //             </Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item>
  //             <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
  //               {showIcons && (
  //                 <CgFileDocument style={{ marginBottom: "5px", marginRight: "3px" }} />
  //               )}
  //               Resume
  //             </Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item>
  //             <Nav.Link as={Link} to="/photos" onClick={() => updateExpanded(false)}>
  //               {showIcons && (
  //                 <HiOutlinePhoto style={{ marginBottom: "5px", marginRight: "3px" }} />
  //               )}
  //               Photography
  //             </Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item>
  //             <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
  //               {showIcons && (
  //                 <RiContactsLine style={{ marginBottom: "3px", marginRight: "4px" }} />
  //               )}
  //               Contact
  //             </Nav.Link>
  //           </Nav.Item>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <span className="brand-title">Sirius's Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* In-page links using anchor tags */}
            <Nav.Item>
              <Nav.Link href="/#home" onClick={() => updateExpanded(false)}>
                {showIcons && (
                  <AiOutlineHome style={{ marginBottom: "5px", marginRight: "3px" }} />
                )}
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#about" onClick={() => updateExpanded(false)}>
                {showIcons && (
                  <AiOutlineUser style={{ marginBottom: "5px", marginRight: "3px" }} />
                )}
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#skills" onClick={() => updateExpanded(false)}>
                {showIcons && (
                  <VscTools style={{ marginBottom: "5px", marginRight: "3px" }} />
                )}
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#projects" onClick={() => updateExpanded(false)}>
                {showIcons && (
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px", marginRight: "3px" }} />
                )}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#contact" onClick={() => updateExpanded(false)}>
                {showIcons && (
                  <RiContactsLine style={{ marginBottom: "3px", marginRight: "4px" }} />
                )}
                Contact
              </Nav.Link>
            </Nav.Item>

            {/* Links to separate pages */}
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                {showIcons && (
                  <CgFileDocument style={{ marginBottom: "5px", marginRight: "3px" }} />
                )}
                Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/photos" onClick={() => updateExpanded(false)}>
                {showIcons && (
                  <HiOutlinePhoto style={{ marginBottom: "5px", marginRight: "3px" }} />
                )}
                Photography
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
