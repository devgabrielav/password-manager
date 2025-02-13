import { letterRegex, numberRegex, specialCharRegex } from "../../utils/FormUtils";

type PasswordValidationType = {
  password: string;
}

function PasswordValidation({ password }: PasswordValidationType) {
  const validPass = 'valid-password-check';
  const invalidPass = 'invalid-password-check';
  
  return (
    <div>
      <p className={ password.length + 1 >= 8 ? validPass : invalidPass }>
        Possuir 8 ou mais caracteres
      </p>
      <p className={ password.length + 1 <= 16 && password.length > 0 ? validPass : invalidPass }>
        Possuir até 16 caracteres
      </p>
      <p className={ numberRegex.test(password) && letterRegex.test(password) ? validPass : invalidPass }>
        Possuir letras e números
      </p>
      <p className={ specialCharRegex.test(password) ? validPass : invalidPass }>
        Possuir algum caractere especial
      </p>
    </div>
  )
}

export default PasswordValidation;