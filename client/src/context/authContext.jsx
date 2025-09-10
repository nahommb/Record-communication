import { createContext, useContext, useState } from "react";
import {jwtDecode} from "jwt-decode";
import { useEffect } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null); 
  const [user, setUser] = useState(null);


useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);

        // Check if token is expired
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded); // set user from token
        } else {
          localStorage.removeItem("token");
        }
      } catch {
        localStorage.removeItem("token");
      }
    }
  }, []);

  const getData = (newdata) => {
    setData(newdata);
    
  };

   const login = (token) => {
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <DataContext.Provider value={{ data, getData ,login,user,logout}}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
