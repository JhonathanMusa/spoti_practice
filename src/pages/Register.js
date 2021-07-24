import { useState } from "react";
import { useHistory } from "react-router";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export const Register = () => {
  const [userData, setUserData] = useState([]);
  const history = useHistory();

  const handleRegister = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    if (
      userData.name !== "" &&
      userData.email !== "" &&
      userData.password !== ""
    ) {
      history.push("/dashboard");
    }

    localStorage.setItem("name", userData.name);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form_register} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.form_input}
            type="text"
            name="name"
            placeholder="Name"
            value={userData.name}
            onChange={handleRegister}
          />
        </div>
        <div>
          <input
            className={styles.form_input}
            name="email"
            onChange={handleRegister}
            placeholder="Email"
            type="email"
            value={userData.email}
          />
        </div>
        <div>
          <input
            className={styles.form_input}
            name="password"
            onChange={handleRegister}
            placeholder="Password"
            type="password"
            value={userData.password}
          />
        </div>

        <div>
          <button className={styles.registerBtn} type="submit">
            Register
          </button>
        </div>

        <div>
          Already has an account?{" "}
          <Link className={styles.linkTo} to="/login">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};
