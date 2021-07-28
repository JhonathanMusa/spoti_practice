import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=c15e7582e1c9436b930359c713a8dfb3&response_type=code&redirect_uri=http://localhost:3000/dashboard&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex omnis neque
        rerum repellat voluptatem consequuntur veritatis dolor! Dolores culpa
        odio placeat eligendi sunt reiciendis aliquam quidem, amet tenetur?
        Ratione, quas.
      </p>
      <Link to="/register">
        <button className={styles.btnHome}>Register</button>
      </Link>
      <a href={AUTH_URL}>
        <button className={styles.btnHome}>Login</button>
      </a>
    </div>
  );
};
