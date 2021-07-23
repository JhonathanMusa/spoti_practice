import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.home} to="/">
        Home
      </Link>
      <Link className={styles.register} to="/register">
        Register
      </Link>
      <Link className={styles.login} to="/login">
        Login
      </Link>
    </div>
  );
};
