import { useState } from "react";
import { useHistory } from "react-router";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

export const Register = () => {
  const [userData, setUserData] = useState([]);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerSubmit = (data) => {
    setUserData(data);
    localStorage.setItem("name", userData.name);
    history.push("/dashboard");
  };

  return (
    <div>
      <form
        className={styles.form_register}
        onSubmit={handleSubmit(registerSubmit)}
      >
        <input
          className={styles.form_input}
          placeholder="Name"
          type="text"
          value={userData.name}
          {...register("name", { required: true })}
        />
        {errors.name && <span>Name is required</span>}

        <input
          className={styles.form_input}
          placeholder="Email"
          type="email"
          value={userData.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email is required</span>}

        <input
          className={styles.form_input}
          placeholder="Password"
          type="password"
          value={userData.password}
          {...register("password", { required: true })}
        />
        {errors.password && <span>Password is required</span>}

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
