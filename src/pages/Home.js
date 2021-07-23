import { Header } from "../components/Header";

export const Home = () => {
  const value = localStorage.getItem("name");
  return (
    <div>
      <Header />
      {value !== undefined && <h1>Welcome {value}</h1>}
    </div>
  );
};
