import axios from "axios";
import React, { useEffect, useState } from "react";
import { token } from "../token";
import { CardSearch } from "./CardSearch";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const apiToken = token();

  const fetchArtist = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/search?query=${search}&type=artist&offset=0&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );
      // console.log(data.artists.items);
      setData(data.artists.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="container m-5">
      <form>
        <input
          className="form-control"
          onChange={handleChange}
          placeholder="Search Artist..."
          type="text"
          // value={search}
        />
      </form>
      <div className="mt-5">
        <CardSearch details={data} />
      </div>
    </div>
  );
};
