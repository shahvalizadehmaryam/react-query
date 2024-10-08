import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Homepage = () => {
  const fetchUsers = () => axios.get("https://jsonplaceholder.typicode.com/users");

  const { data, isLoading } = useQuery(["users"], fetchUsers);
  console.log({ data, isLoading });
  if (isLoading) <h1>Loading...</h1>;
  return (
    <div>
      <h3>Home page</h3>
      {data?.data.map((i) => (
        <p key={i.id}>{i.name}</p>
      ))}
    </div>
  );
};

export default Homepage;
