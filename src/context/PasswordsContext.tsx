import { createContext } from "react";
import { FormType } from "../Types/FormTypes";

type PasswordsContextType = {
  passwords: FormType[],
  setPasswords: React.Dispatch<React.SetStateAction<FormType[]>>
}

const initialValue: PasswordsContextType = {
  passwords: [],
  setPasswords: () => {}
}

export const PasswordsContext = createContext(initialValue);