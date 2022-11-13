import { createContext } from "react";

export type GlobalContent = {
  switchToSignup: () => void;
  switchToSignin: () => void;
};

export const AccountContext = createContext<GlobalContent>({
    switchToSignup: () => {},
    switchToSignin: () => {},
});
