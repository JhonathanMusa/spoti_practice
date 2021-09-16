import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { token } from "../token";

export const Details = () => {
  const [artist, setArtist] = useState({
    name: "",
    images: [],
  });
  const { id } = useParams();
  const apiToken = token();

  const fetcArtist = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${id}`,
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );
      setArtist({ name: data.name, images: data.images });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {artist.images.length > 0 && (
        <img
          src={artist.images[0].url}
          className="card-img-top"
          alt="..."
          style={{ width: "200px" }}
        />
      )}

      <div className="card-body">
        <h5 className="card-title">{artist.name}</h5>
        <p className="card-text">
          <span className="badge bg-success">{artist.name}</span>
        </p>

        <Link to="/search">
          <button
            className="btn btn-outline-success"
            style={{ width: "100px" }}
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};
