import { useHistory } from "react-router-dom";
import { Header } from "../components/Header";
import styles from "./Register.module.css";

export const Dashboard = () => {
  const value = localStorage.getItem("name");
  const history = useHistory();

  if (!value) {
    history.push("/register");
  }

  return (
    <div className={styles.container__dashboard}>
      <Header />
      {value !== undefined && <h1>Welcome {value}</h1>}
    </div>
  );
};
