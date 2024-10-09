import { Link } from "react-router-dom";
import { useUsersData } from "../hooks/queries";

const UsersPage = () => {
  const { data, isLoading, isError, error, isFetching, refetch } =
    useUsersData();
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
