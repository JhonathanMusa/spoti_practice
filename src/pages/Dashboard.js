import { useHistory } from "react-router-dom";
import { Header } from "../components/Header";

export const Dashboard = () => {
  const value = localStorage.getItem("name");
  const history = useHistory();

  if (!value) {
    history.push("/register");
  }
  return (
    <div>
      <Header />
      {value !== undefined && <h1>Welcome {value}</h1>}
    </div>
  );
};
