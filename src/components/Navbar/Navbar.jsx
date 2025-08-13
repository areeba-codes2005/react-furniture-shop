import React, { useEffect, useState } from "react";
import ShopDropdown1 from "../Dropdown/ShopDropdown/ShopDropdown1";
import PageDrop from "../Dropdown/PagesDropdown/PageDrop";
import { pagesMenu, blogMenu } from "../data/PageDropData";
import CollecDrop from "../Dropdown/Collections/CollecDrop";
import { CollectDrop } from "../data/CollectDrop";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  // Location hook for active link
  const location = useLocation();

  const [activeId, setActiveId] = useState(location.pathname);
  // Show/hide the dropdown
  const [showShop, setShowShop] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  // Toggle the mobile navbar collapse (open/close)
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  // Update activeId on route change
  useEffect(() => {
    setActiveId(location.pathname);
  }, [location.pathname]);

  // Handle responsive view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="container-fluid na">
        <nav className="navbar navbar-expand-lg container-fluid">
          {/* Logo */}
          <Link className="navbar-brand p-3" to="/">
            <img src={props.brandLogo} alt="Logo" />
          </Link>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen); // Toggle menu open/close
              setShowShop(false); // Close dropdown if open
            }}
            data-bs-target="#navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsing menu */}
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {props.menuItems.map((item, index) => {
                const dropdownMap = {
                  Shop: {
                    show: showShop,
                    setShow: setShowShop,
                    component: <ShopDropdown1 />,
                  },
                  Pages: {
                    show: showPages,
                    setShow: setShowPages,
                    component: (
                      <PageDrop
                        position={{ left: "43%" }}
                        items={pagesMenu}
                        className="pages-dropdown"
                      />
                    ),
                  },
                  Collections: {
                    show: showCollection,
                    setShow: setShowCollection,
                    component: <CollecDrop items={CollectDrop} />,
                  },

                  Blog: {
                    show: showBlog,
                    setShow: setShowBlog,
                    component: (
                      <PageDrop
                        position={{
                          left: "63%",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                        }}
                        items={blogMenu}
                        className="blog-dropdown"
                      />
                    ),
                  },
                };
                const dropdown = dropdownMap[item.label];

                if (dropdown) {
                  return (
                    <li
                      key={index}
                      className="nav-item p-2 mx-2 hover-zone"
                      onMouseEnter={
                        !isMobile ? () => dropdown.setShow(true) : undefined
                      }
                      onMouseLeave={
                        !isMobile ? () => dropdown.setShow(false) : undefined
                      }
                      onClick={
                        isMobile
                          ? () => dropdown.setShow((prev) => !prev)
                          : undefined
                      }
                    >
                      <Link
                        className={`nav-link ${activeId === item.link ? "active" : ""}`}
                        to={item.link}
                        onClick={(e) => {
                          if (isMobile && dropdown.component) {
                            e.preventDefault();
                          } else {
                            setIsOpen(false);
                          }
                        }}
                      >
                        {item.label} {item.icon}
                      </Link>
                      {dropdown.show && dropdown.component}
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="nav-item p-2 mx-2">
                      <Link
                        className={`nav-link ${activeId === item.link ? "active" : ""}`}
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label} {item.icon}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          {/* Social Icons */}
          <div className="social-icons-mobile d-flex gap-4">
            {props.socialIcons.map((item, index) => (
              <span className="icon fs-4" key={index}>
                {item.icon}
              </span>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
