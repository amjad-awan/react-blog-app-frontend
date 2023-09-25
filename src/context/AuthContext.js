import axios from "axios";
import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const handleLogin = async (data) => {
    const { password, email } = data;
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}user/login-user`, {
        password: password,
        email: email,
      });
      setUser(response?.data);
      localStorage.setItem("user", JSON.stringify(response?.data));
    } catch (error) {
      console.log("error ", error);
    }
  };

  useMemo(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
