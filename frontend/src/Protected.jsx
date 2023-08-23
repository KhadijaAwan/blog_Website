import { useAuthentication } from "./context";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";

const Protected = () => {
  const [authenticate, setAuthenticate] = useAuthentication();
  return authenticate.user ? <Outlet /> : <Login />;
};

export default Protected;
