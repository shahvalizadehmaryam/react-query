import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const fetchUsers = () => {
    console.log("fetching...");
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };
  const onSuccess = (data) => console.log("success", data);
  const onError = (error) => console.log("error", error);

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ["users"],
    fetchUsers,
    {
      onSuccess,
      onError,
    }
  );
  console.log({ data, isLoading, isError, error, isFetching });
  if (isLoading) <h1>Loading...</h1>;
  if (isError) return <h3>error - {error.message}</h3>;
  return (
    <div>
      <h3>users</h3>
      <button onClick={refetch}>Fetch</button>
      {isLoading && isFetching && <h1>Loading...</h1>}
      {data?.data.map((i) => (
        <Link key={i.id} to={`/users/${i.id}`}>
         <p> {i.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;
