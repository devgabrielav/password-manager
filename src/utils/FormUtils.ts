import Swal from "sweetalert2";
import { FormType } from "../Types/FormTypes";

export const initialFormContent: FormType = {
  serviceName: '',
  login: '',
  password: '',
  url: '',
};

export const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
export const numberRegex = /[0-9]/;
export const letterRegex = /[a-zA-Z]/;


const passwordValidations = (password: string) => {
  const validPassword = specialCharRegex.test(password) && numberRegex.test(password) && letterRegex.test(password);

  if (((password.length + 1) >= 8 && (password.length + 1) <= 16) && validPassword) {
    return true;
  }
  return false;
}

export const enableButton = (formContent: FormType) => {
  const { serviceName, login, password } = formContent;
  
  if (serviceName.trim().length !== 0 && login.trim().length !== 0 && password.trim().length !== 0) {
    if (passwordValidations(password)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export const savePassToLocal = (formContent: FormType) => {
  const localSavedPasswords = JSON.parse(localStorage.getItem('passwords') || '[]');
  const newPasswords = [...localSavedPasswords, formContent];
  localStorage.setItem('passwords', JSON.stringify(newPasswords));

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Service added successfully!",
    showConfirmButton: false,
    timer: 1500
  });

  return newPasswords;
}

type RemovePassType = {
  formContent: FormType;
  setChange: React.Dispatch<React.SetStateAction<[] | FormType[]>>;
}

export const removePassFromLocal = ({ formContent, setChange }: RemovePassType) => {
  const localSavedPasswords: FormType[] | [] = JSON.parse(localStorage.getItem('passwords') || '[]');
  const removedItem = localSavedPasswords.filter((item) => (item.login != formContent.login) && (item.serviceName != formContent.serviceName));

  localStorage.setItem('passwords', JSON.stringify(removedItem));
  const updatedLocalSavedPasswords: FormType[] | [] = JSON.parse(localStorage.getItem('passwords') || '[]');
  setChange(updatedLocalSavedPasswords);
}
