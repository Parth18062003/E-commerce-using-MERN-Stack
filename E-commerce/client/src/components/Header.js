import {
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Headerdropdown from "./Headerdropdown";
import { useAuth } from "../context/auth";

function Header() {
  const [auth, setAuth] = useAuth();
  const [showElement, setShowElement] = useState(window.innerWidth >= 768);
  const location = useLocation();
  const [offcanvasShow, setOffcanvasShow] = useState(false);

  const handleResize = () => {
    setShowElement(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Close Offcanvas whenever location.pathname changes
    setOffcanvasShow(false);
  }, [location.pathname]);

  const handleToggleOffcanvas = () => {
    setOffcanvasShow((prevShow) => !prevShow);
  };

  const handleNavItemClick = () => {
    setOffcanvasShow(false);
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };

  return (
    <>
      <Container
        fluid
        className="navbar-heading py-2"
        style={{ minHeight: "10vh" }}
      >
        <Row>
          {!auth.user ? (
            <>
              {" "}
              <Col
                className="profile-btn d-flex justify-content-start align-items-center"
                xs={2}
                md={4}
              >
                <Link to="/login">
                  <button className="border-0">
                    <span title="login">
                      <i className="fa-regular fa-user fa-2xl"></i>
                    </span>
                  </button>
                </Link>
              </Col>
            </>
          ) : (
            <>
              {" "}
              <Col
                className="profile-btn d-flex justify-content-start align-items-center"
                xs={2}
                md={4}
              >
                <Link to="/login">
                  <button className="border-0" onClick={handleLogout}>
                    <span title="log out">
                      <i className="fa-solid fa-right-from-bracket fa-xl"></i>
                    </span>
                  </button>
                </Link>
                <Link
                  to={`/dashboard/${
                    auth?.user?.role === 1 ? "admin-profile" : "user-profile"
                  }`}
                >
                  <button className="border-0">
                    <span title="profile">
                      <i className="fa-regular fa-user fa-xl"></i>
                    </span>
                  </button>
                </Link>
              </Col>
            </>
          )}

          <Col
            className="logo d-flex justify-content-center align-items-center"
            xs={9}
            md={4}
          >
            <h1>
              <Link to="/">SneakerHead</Link>
            </h1>
          </Col>
          {showElement && (
            <Col
              className="search-bar d-flex justify-content-center align-items-center"
              md={4}
            >
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-basic border-0">
                  <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                </Button>
                <Button variant="outline-basic border-0">
                  <i className="fa-solid fa-bag-shopping fa-2xl"></i>
                </Button>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-links mb-3">
          <Container fluid>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={handleToggleOffcanvas}
            />
            <Navbar.Offcanvas
              show={offcanvasShow}
              onHide={() => setOffcanvasShow(false)}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h1>SneakerHead</h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-around align-items-center my-2 flex-grow-1 pe-3">
                  <Nav.Link
                    href="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/view-product/filter/tags/new arrivals"
                    className={
                      location.pathname === "/view-product/filter/tags/new%20arrivals"
                        ? "active"
                        : ""
                    }
                  >
                    New Arrivals
                  </Nav.Link>
                  <Headerdropdown
                    title="Footwear"
                    handleCloseOffcanvas={handleNavItemClick}
                  />
                  <Headerdropdown
                    title="Apparel"
                    handleCloseOffcanvas={handleNavItemClick}
                  />
                  <Headerdropdown
                    title="Accessories"
                    handleCloseOffcanvas={handleNavItemClick}
                  />
                  <Nav.Link
                    href="/display/brands"
                    className={
                      location.pathname === "/display/brands" ? "active" : ""
                    }
                  >
                    Brands
                  </Nav.Link>
                  {!showElement && <Nav.Link href="#action2">Cart</Nav.Link>}
                </Nav>
                {!showElement && (
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-basic border-0">
                      <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                    </Button>
                  </Form>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
