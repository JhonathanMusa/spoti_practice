import { useHistory } from "react-router-dom";

export const Home = () => {
  const value = localStorage.getItem("name");
  const history = useHistory();
  if (value) {
    history.push("/dashboard");
  }
  return <div>Welcome</div>;  
};
