import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const fetchUserDetail = ({ queryKey }) => {
    return axios.get(
      `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
    );
  };
  const { data, isLoading, isFetching } = useQuery(
    ["users", id],
    fetchUserDetail
  );
  console.log(data);
  return (
    <div>
      <h3>user - {id} </h3>
      {isLoading && isFetching && <h3>Loading...</h3>}
      <p>{data?.data.name}</p>
    </div>
  );
}

export default UserDetails;
