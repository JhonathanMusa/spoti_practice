import { useHistory, Link } from "react-router-dom";
import styles from "./Register.module.css";

export const Home = () => {
  const value = localStorage.getItem("name");
  const history = useHistory();
  if (value) {
    history.push("/dashboard");
  }
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
    </div>
  );
};
