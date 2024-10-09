import { useParams } from "react-router-dom";
import { useUserDetails } from "../hooks/queries";

function UserDetails() {
  const { id } = useParams();

  const { data, isLoading, isFetching } = useUserDetails(id);
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
