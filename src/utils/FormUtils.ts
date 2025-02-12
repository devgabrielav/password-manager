import { FormType } from "../Types/FormTypes";

export const initialFormContent: FormType = {
  serviceName: '',
  login: '',
  password: '',
  url: '',
};

type EnableButtonFunctionType = {
  formContent: FormType;
  setFunction: (value: React.SetStateAction<boolean>) => void
}

const specialCharRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
const numberRegex = /[0-9]/;
const letterRegex = /[a-zA-Z]/;


const passwordValidations = (password: string) => {
  const validPassword = specialCharRegex.test(password) && numberRegex.test(password) && letterRegex.test(password);

  if (((password.length + 1) >= 8 && (password.length + 1) <= 16) && validPassword) {
    return true;
  }
  return false;
}

export const enableButton = ({formContent, setFunction}: EnableButtonFunctionType) => {
  const { serviceName, login, password } = formContent;
  
  if (serviceName.trim().length !== 0 && login.trim().length !== 0 && password.trim().length !== 0) {
    if (passwordValidations(password)) {
      setFunction(false);
    } else {
      setFunction(true);
    }
  } else {
    setFunction(true);
  }
}
