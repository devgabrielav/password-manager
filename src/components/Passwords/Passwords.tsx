import { useEffect, useState } from "react";
import { FormType } from "../../Types/FormTypes";
import { removePassFromLocal } from "../../utils/FormUtils";
import Button from "../Button/Button";
import Input from "../Input/Input";

function Passwords() {
  const [passwords, setPasswords] = useState<FormType[] | []>([]);
  const [showPass, setShowPass] = useState<boolean>(false);
  
  useEffect(() => {
    const localSavedPasswords = localStorage.getItem('passwords') || '[]';
    const savedPasswords: FormType[] | [] = JSON.parse(localSavedPasswords);
    setPasswords(savedPasswords);
  }, [])

  if (passwords.length === 0) {
    return (
      <h1>Nenhuma senha cadastrada</h1>
    )
  } 

  return (
    <>
      <Input
          id="showPass"
          name="showPass"
          type="checkbox"
          onChangeFunction={ () => setShowPass(!showPass) }
          title="Show Passwords"
        />
      {passwords.map((password) => (
        <div key={ password.serviceName }>
          {password.url.length > 0 ? (
            <a href={ password.url }>{password.serviceName}</a>
            ) : (
            <span>{password.serviceName}</span>
            )
          }
          <span>Login: { password.login }</span>
          { showPass ? (
            <span>Password: { password.password }</span>
          ) : (
            <span>Password: { '*'.repeat(password.password.length) }</span>
          ) }
          

          <Button title="X" isDisabled={ false } buttonFunction={ () => removePassFromLocal({formContent: password, setChange: setPasswords}) } />
        </div>
      ))}
    </>
  )
}

export default Passwords;