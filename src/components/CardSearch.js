import React from "react";
import { Link } from "react-router-dom";

export const CardSearch = ({ details }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {details.map((item) => (
        <div key={item.id} className="col">
          <Link to={"/details/" + item.id}>
            <div className="card card-col">
              {item.images.length > 0 ? (
                <img
                  src={item.images[0].url}
                  className="card-img-top"
                  alt="..."
                />
              ) : (
                <img src="noimage.jpg" alt="" />
              )}

              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <span className="badge bg-success">{item.name}</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
