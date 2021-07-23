import { useState } from "react";
import { useHistory } from "react-router";
import styles from "./Register.module.css";

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
    localStorage.setItem("name", userData.name, 2);
    history.push("/");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form_register} onSubmit={handleSubmit}>
        <input
          className={styles.form_input}
          name="name"
          onChange={handleRegister}
          placeholder="Name"
          type="text"
          value={userData.name}
        />

        <input
          className={styles.form_input}
          name="email"
          onChange={handleRegister}
          placeholder="Email"
          type="email"
          value={userData.email}
        />

        <input
          className={styles.form_input}
          name="password"
          onChange={handleRegister}
          placeholder="Password"
          type="password"
          value={userData.password}
        />

        <button className={styles.registerBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
