import { useState } from "react";
import { useHistory } from "react-router";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState([]);
  const history = useHistory();

  const handleLogin = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.email !== "" && userData.password !== "") {
      history.push("/dashboard");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form_register} onSubmit={handleSubmit}>
        <input
          className={styles.form_input}
          name="email"
          onChange={handleLogin}
          placeholder="Email"
          type="email"
          value={userData.email}
        />

        <input
          className={styles.form_input}
          name="password"
          onChange={handleLogin}
          placeholder="Password"
          type="password"
          value={userData.password}
        />

        <button className={styles.registerBtn} type="submit">
          Login
        </button>
        <div>
          New Here?{" "}
          <Link className={styles.linkTo} to="/register">
            Create your account
          </Link>
        </div>
      </form>
    </div>
  );
};
