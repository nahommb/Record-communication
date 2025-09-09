import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null); 
  

  const getData = (newdata) => {
    setData(newdata);
    
  };



  return (
    <DataContext.Provider value={{ data, getData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
