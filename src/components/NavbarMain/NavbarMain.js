import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showRegistrationDropdown, setShowRegistrationDropdown] = useState(false);
  const [activeNav, setActiveNav] = useState([true, false, false, false, false]);
  const [expand, setExpand] = useState(false);

  const closeNav = () => {
    setExpand(false);
  };

  const showServicesDropdownHandler = () => {
    setShowServicesDropdown(true);
  };

  const hideServicesDropdownHandler = () => {
    setShowServicesDropdown(false);
  };

  const showRegistrationDropdownHandler = () => {
    setShowRegistrationDropdown(true);
  };

  const hideRegistrationDropdownHandler = () => {
    setShowRegistrationDropdown(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav.map(() => false);
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="light"
        expand="lg"
        sticky="top"
        onToggle={() => {
          setExpand((prevState) => !prevState);
        }}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            Mebiut
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }}>
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => {
                  handleActiveNav(0);
                  closeNav();
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/aboutUs"
                className={`${styles.nav_text} nav-link ${activeNav[1] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => {
                  handleActiveNav(1);
                  closeNav();
                }}
              >
                About Us
              </NavLink>

              <NavLink
                to="/OurShop"
                className={`${styles.nav_text} nav-link ${activeNav[2] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => {
                  handleActiveNav(2);
                  closeNav();
                }}
              >
                Shop Now
              </NavLink>

              <NavDropdown
                show={showServicesDropdown}
                onMouseEnter={showServicesDropdownHandler}
                onMouseLeave={hideServicesDropdownHandler}
                className={`nav-link ${styles.drop}`}
                title={
                  <Link
                    to="/services"
                    style={{ textDecoration: "none" }}
                    className={styles.dropicon}
                    onClick={() => {
                      handleActiveNav(3);
                      closeNav();
                    }}
                  >
                    <span className={`${styles.nav_text} my-auto ${activeNav[3] ? styles.active : ""}`}>
                      Services
                    </span>
                  </Link>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/sMediaService"
                    onClick={() => {
                      handleActiveNav(3);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Custom Sauce Development
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/qualityAssurance"
                    onClick={() => {
                      handleActiveNav(2);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Subscription Service
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/cloudIoT"
                    onClick={() => {
                      handleActiveNav(2);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Corporate and Bulk Orders
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/itConsultancy"
                    onClick={() => {
                      handleActiveNav(2);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Sauce Tastings and Workshops
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/aiSolutions"
                    onClick={() => {
                      handleActiveNav(2);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Wholesale and Distribution
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink
                to="/contactUs"
                className={`${styles.nav_text} nav-link ${activeNav[4] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => {
                  handleActiveNav(4);
                  closeNav();
                }}
              >
                Contact Us
              </NavLink>

              {/* New Registration Dropdown */}
              <NavDropdown
                show={showRegistrationDropdown}
                onMouseEnter={showRegistrationDropdownHandler}
                onMouseLeave={hideRegistrationDropdownHandler}
                className={`${styles.nav_text} nav-link ${activeNav[5] ? styles.active : ""}`}
                title="Registration"
                id="nav-registration-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    to="/signup"
                    className={styles.dropdownText}
                    onClick={() => {
                      handleActiveNav(5);
                      closeNav();
                    }}
                  >
                    Signup
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/login"
                    className={styles.dropdownText}
                    onClick={() => {
                      handleActiveNav(5);
                      closeNav();
                    }}
                  >
                    Login
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
