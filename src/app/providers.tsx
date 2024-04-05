"use client";

import { NextUIProvider } from "@nextui-org/react";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

type UserContextType = {
  nickname: string | null;
  setNickname: (nickname: string) => void;
  isNickname: boolean;
};

export const UserContext = createContext<UserContextType>({
  nickname: null,
  setNickname: () => {},
  isNickname: false,
});

export const useNickname = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [nickname, setNickname] = useState<string | null>(null);
  const isNickname = nickname !== null;
  // 오늘 날짜 가져오기
  let mainDate = new Date();
  // 시차 간격 가져오기
  const offset = mainDate.getTimezoneOffset();
  // 시차 적용

  mainDate = new Date(mainDate.getTime() - offset * 60 * 1000);
  const today = mainDate.toISOString().split("T")[0];

  const saveNickname = useCallback(
    (name: string) => {
      setNickname(name);
    },
    [nickname]
  );

  return (
    <UserContext.Provider
      value={{ nickname, setNickname: saveNickname, isNickname, today }}
    >
      {children}
    </UserContext.Provider>
  );
};

type DateContextType = {
  today: string;
  searchDate: string;
  setSearchDate: (sDate: string) => void;
};

export const DateContext = createContext<DateContextType>({
  today: "",
  searchDate: "",
  setSearchDate: () => {},
});

export const useDateInfo = () => useContext(UserContext);
