import React from "react";
import { Link } from "react-router-dom";
import "./CollecDrop.css";

function CollecDrop({ items }) {
  return (
    <div className="coll-drop p-4">
      <div className="container-fluid">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-md-2 text-center mb-2 mt-3">
              <img src={item.img} alt={item.name} />
              <Link to={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollecDrop;
