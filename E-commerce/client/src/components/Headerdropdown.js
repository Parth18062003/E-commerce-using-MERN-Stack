import React from "react";
import { Col, Container, NavDropdown, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const categories = [
  {
    title: "Footwear",
    menSubcategories: ["Mens", "Sneakers", "Basketball", "Classics"],
    womenSubcategories: ["Womens", "Sneakers", "Basketball", "Classics"]
  },
  {
    title: "Apparel",
    menSubcategories: ["Mens", "T-Shirts", "Hoodies", "Pants"],
    womenSubcategories: ["Womens", "T-Shirts", "Hoodies", "Pants"]
  },
  {
    title: "Accessories",
    subcategories: ["Backpacks", "Collectibles", "Caps", "Socks"]
  }
];

function HeaderDropdown({ title, handleCloseOffcanvas }) {
  const category = categories.find((cat) => cat.title === title);
  
  const location = useLocation();

  if (!category) {
    return null;
  }

  // Determine whether to show the dropdown based on screen width
  const showDropdown = window.innerWidth > 768;

  const handleItemClick = () => {
    handleCloseOffcanvas();
  };
  
  return (
    <>
      {showDropdown ? (
        <NavDropdown
          title={
            <>
            <div
              to={`/view-product/filter/tags/${category.title}`}
              className={
                location.pathname === `/view-product/filter/tags/${category.title.toLowerCase()}` ? "active-dropdown nav-dropdown" : "nav-dropdown"
              }
              style={{color:'rgb(122, 122, 122)'}}
              onClick={handleItemClick}
            >
               <span>{category.title} </span> 
               <i className="fa-solid fa-chevron-down fa-2xs"></i>
            </div>
            </>
          }
          id={`${category.title.toLowerCase()}-dropdown`}
        >
          <Container
            style={{
              width: window.innerWidth > 768 ? "35em" : "100%",
            }}
          >
            <Row>
              {category.menSubcategories && (
                <Col xs={6} className="dropdown-links">
                  {category.menSubcategories.map((subcategory, index) => (
                    <NavDropdown.Item
                      key={index}
                      href={`/view-product/filter/tags/${subcategory}`}
                      style={{ fontSize: "17px",color:'rgb(122, 122, 122)' }}
                    >
                      {subcategory}
                    </NavDropdown.Item>
                  ))}
                </Col>
              )}
              {category.womenSubcategories && (
                <Col xs={6} className="dropdown-links">
                  {category.womenSubcategories.map((subcategory, index) => (
                    <NavDropdown.Item
                      key={index}
                      href={`/view-product/filter/tags/${subcategory}`}
                      style={{ fontSize: "17px",color:'rgb(122, 122, 122)' }}
                    >
                      {subcategory}
                    </NavDropdown.Item>
                  ))}
                </Col>
              )}
              {category.subcategories && (
                <Col xs={12} className="dropdown-links">
                  {category.subcategories.map((subcategory, index) => (
                    <NavDropdown.Item
                      key={index}
                      href={`/display/${subcategory.toLowerCase()}`}
                      style={{ fontSize: "17px",color:'rgb(122, 122, 122)' }}
                    >
                      {subcategory}
                    </NavDropdown.Item>
                  ))}
                </Col>
              )}
            </Row>
          </Container>
        </NavDropdown>
      ) : (
        <Link
          to={`/display/${category.title}`}
          className="nav-dropdown"
        >
          {category.title}
        </Link>
      )}
    </>
  );
}

export default HeaderDropdown;
