import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsersData = () => {
    const fetchUsers = () => {
        console.log("fetching...");
        return axios.get("https://jsonplaceholder.typicode.com/users");
      };
   return useQuery(
        ["users"],
        fetchUsers
      );
};
const useUserDetails = (id) => {
    const fetchUserDetail = ({ queryKey }) => {
        return axios.get(
          `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
        );
      };
    return  useQuery(
        ["users", id],
        fetchUserDetail
      );
}
export { useUsersData , useUserDetails };
