import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20",
        {
          headers: {
            Authorization:
              "Bearer BQAiZX4UFd57LnuxwHLAluZQS2pFTt4XFDqMC32aE1_jB8LsA8-79mfAoVbemxJZIp_MvYjMr5bzgIMaQ-A",
          },
        }
      );
      // console.log(data.albums.items);
      setData(data.albums.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="m-5">
      <Card details={data} />
    </div>
  );
};
