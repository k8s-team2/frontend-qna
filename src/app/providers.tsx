"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode, createContext, useContext, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

type UserContextType = {
  nickname: string | null;
  setNickname: (nickname: string) => void;
  isNickname: true | false;
};

const UserContext = createContext<UserContextType>({
  nickname: null,
  setNickname: () => {},
  isNickname: false,
});

export const useNickname = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [nickname, setNickname] = useState<string | null>(null);

  const isNickname = nickname == null;

  const saveNickname = (nickname: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nickname", nickname);
    }

    setNickname(nickname);
  };

  return (
    <UserContext.Provider
      value={{ nickname, setNickname: saveNickname, isNickname }}
    >
      {children}
    </UserContext.Provider>
  );
};
