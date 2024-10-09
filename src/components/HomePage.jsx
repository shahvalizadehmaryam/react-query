import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h3>Home page</h3>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Homepage;
