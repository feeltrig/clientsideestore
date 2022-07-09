import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

import somwthing from "../";

const Breadcrumbnavigation = () => {
  // LOCATION HOOK
  const location = useLocation();
  const path = location.pathname.split("/").filter((item) => {
    return (item = item);
  });
  return (
    <div className="ms-5 p-2">
      <Breadcrumb>
        {path.map((item, index) => {
          // REST OF PAGES
          if (index !== path.length - 1) {
            let pathurl = `/${path.slice(0, index + 1).join("/")}`;
            return (
              <Breadcrumb.Item key={index}>
                <Link to={pathurl}>{item}</Link>
              </Breadcrumb.Item>
            );
          } else {
            // CURRENT PAGE
            return (
              <Breadcrumb.Item key={index} active>
                {item}
              </Breadcrumb.Item>
            );
          }
        })}
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbnavigation;

// <div class="h-auto d-inline-block" style="width: 120px;
