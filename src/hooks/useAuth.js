import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContenxt";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
