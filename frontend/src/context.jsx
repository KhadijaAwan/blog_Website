import { useState, useEffect, useContext, createContext } from "react";

const Authenticated_user = createContext();

const Authentication_Provider = ({ children }) => {
  const [authenticate, setAuthenticate] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("login_user");
    const user_data = JSON.parse(data);
    data
      ? setAuthenticate({
          ...authenticate,
          user: user_data.user,
          token: user_data.token,
        })
      : console.log("Failed to get user information");
  }, []);

  return (
    <Authenticated_user.Provider value={[authenticate, setAuthenticate]}>
      {children}
    </Authenticated_user.Provider>
  );
};

const useAuthentication = () => useContext(Authenticated_user);

export { Authentication_Provider, useAuthentication };
