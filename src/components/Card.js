import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ details }) => {

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {details.map((item) => (
        <div key={item.id} className="col">
          <Link to={"/details/" + item.id}>
            <div className="card card-col">
              <img
                src={item.images[0].url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <span className="badge bg-success">
                    {item.artists[0].name}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
