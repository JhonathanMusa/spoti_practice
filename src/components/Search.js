import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardSearch } from "./CardSearch";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const fetchArtist = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/search?query=${search}&type=artist&offset=0&limit=20`,
        {
          headers: {
            Authorization:
              "Bearer BQAiZX4UFd57LnuxwHLAluZQS2pFTt4XFDqMC32aE1_jB8LsA8-79mfAoVbemxJZIp_MvYjMr5bzgIMaQ-A",
          },
        }
      );
      console.log(data.artists.items);
      setData(data.artists.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtist();
  }, [search]);

  const handleChange = (e) => {
    console.log(e.target.value);
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
