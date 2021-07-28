import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import styles from "./Register.module.css";
import { Credentials } from "./Credentials";

export const Dashboard = () => {
  const credential = Credentials();
  let code = new URLSearchParams(window.location.search).get("code");
  const [token, setToken] = useState("");
  const [apiToken, setApitoken] = useState("");
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });

  useEffect(() => {
    window.history.pushState({}, null, "/dashboard");
    const fetchTokenApi = async () => {
      try {
        const { data } = await axios("https://accounts.spotify.com/api/token", {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              btoa(credential.CLIENT_ID + ":" + credential.CLIENT_SECRET),
          },
          data: "grant_type=client_credentials",
          method: "POST",
        });
        console.log(data.access_token);
        setApitoken(data.access_token);

        getCurrentPlaying(data.access_token);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTokenApi();
  }, []);

  const getCurrentPlaying = (token) => {
    axios("https://api.spotify.com/v1/browse/categories?locale=sv_SE", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      console.log(response.data.categories.items);
    });
  };

  return (
    <div className={styles.container__dashboard}>
      <Header />
      <h1>Welcome</h1>
    </div>
  );
};
