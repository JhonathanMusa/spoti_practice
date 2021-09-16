import axios from "axios";
import React, { useEffect, useState } from "react";
import { token } from "../token";
import { Card } from "./Card";

export const Home = () => {
  const [data, setData] = useState([]);
  const apiToken = token();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20",
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="m-5">
      <Card details={data} />
    </div>
  );
};
