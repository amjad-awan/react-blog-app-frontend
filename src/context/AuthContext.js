import axios from "axios";
import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from "../firebase";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const handleLogin = async (data={password:"", email:"",googleIdToken:""}) => {
    const { password, email,googleIdToken } = data;
    try {
      const payload = googleIdToken
      ? { googleIdToken }
      : { password, email };
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}user/login-user`,payload);
      console.log("response",response)
      if(response && response.data)
      {
        setUser(response?.data);
        localStorage.setItem("user", JSON.stringify(response?.data));
        return response.status
      }else{
         throw "Something went wrong"
      }
   
    } catch (error) {
      console.log("error ", error);
    }
  };


// Function to handle Google Login
const handleGoogleLogin = async () => {
  try {
    // const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log("result", result)
    const googleIdToken = await result.user.getIdToken();
    console.log("googleIdToken", googleIdToken)


    const res=await handleLogin({ googleIdToken });
    return res
  } catch (error) {
    console.error("Google login error: ", error);
  }
};

const logout = () => {
  signOut(auth).then(() => {
      setUser(null);
      localStorage.removeItem("user")
    })
    .catch((error) => {
      console.error(error);
    });
}

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
    <AuthContext.Provider value={{ user, setUser,logout, handleLogin,handleGoogleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
