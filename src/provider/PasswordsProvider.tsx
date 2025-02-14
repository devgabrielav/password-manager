import { ReactNode, useState } from "react";
import { FormType } from "../Types/FormTypes";
import { PasswordsContext } from "../context/PasswordsContext";

export default function PasswordsProvider({ children }: { children: ReactNode }) {
  const [passwords, setPasswords] = useState<FormType[]>([]);

  return (
    <PasswordsContext.Provider value={{ passwords, setPasswords }}>
      { children }
    </PasswordsContext.Provider>
  )
}