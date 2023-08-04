import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";

type AuthorContextData = {
  author: string;
  setAuthor: (param: string) => void;
  choosing: boolean;
  setChoosing: (param: boolean) => void;
};

export const AuthorContext = createContext({} as AuthorContextData);

type AuthorContextProviderProps = {
  children: ReactNode;
};

export function AuthorContextProvider({
  children,
}: AuthorContextProviderProps) {
  const [author, setAuthor] = useState("@numen527");
  const [choosing, setChoosing] = useState(false);

  return (
    <AuthorContext.Provider
      value={{
        author,
        setAuthor,
        choosing,
        setChoosing,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
}

export const useAuthor = () => {
  return useContext(AuthorContext);
};
