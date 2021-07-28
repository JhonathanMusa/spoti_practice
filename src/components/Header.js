import styles from "./Header.module.css";
import { Link, useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export const Header = () => {
  const name = localStorage.getItem("name");
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("Token Login");
    localStorage.removeItem("Token API");
    history.push("/");
  };

  return (
    <div className={styles.container}>
      <Link className={styles.home} to="/dashboard">
        Music App
      </Link>
      <Link className={styles.home} to="/dashboard"></Link>

      <div className={styles.btnContainer}>
        <span className={styles.userName}>{name}</span>
        <button className={styles.btnFav}>
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </button>
        <button className={styles.btnLogout} onClick={handleLogout}>
          <ExitToAppIcon></ExitToAppIcon>
        </button>
      </div>
    </div>
  );
};
