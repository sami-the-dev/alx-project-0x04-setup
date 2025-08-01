import { createContext, PropsWithChildren, useContext, useState } from "react";

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextProps | undefined>(undefined);

const CountProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CountProvider");
  }
  return context;
};

export default CountProvider;
