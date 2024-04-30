import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();
  console.log(location.state.val);

  return (
    <>
      <h1>Welcome Logged in user</h1>
      <p>{location.state.val.email}</p>
      <p>{location.state.val.name}</p>
    </>
  );
};

export default Dashboard;
