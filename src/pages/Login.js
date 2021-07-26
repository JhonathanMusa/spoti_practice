import { useState } from "react";
import { useHistory } from "react-router";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const [userData, setUserData] = useState([]);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = (data) => {
    setUserData(data);
    // history.push("/dashboard");
  };

  return (
    <div>
      <form
        className={styles.form_register}
        onSubmit={handleSubmit(loginHandler)}
      >
        <input
          className={styles.form_input}
          placeholder="Email"
          type="email"
          value={userData.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email required</span>}

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
            Login
          </button>
        </div>

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
