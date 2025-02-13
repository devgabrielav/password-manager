import { useState } from "react";
import Button from "../Button/Button";
import { FormType } from "../../Types/FormTypes";
import { enableButton, initialFormContent, savePassToLocal } from "../../utils/FormUtils";
import Input from "../Input/Input";
import PasswordValidation from "../PasswordValidation/PasswordValidation";

function Form() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formContent, setFormContent] = useState<FormType>(initialFormContent);
  const [passwordType, setPasswordType] = useState<string>('password');

  const inputChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormContent({
      ...formContent,
      [name]: value
    })
  }

  return (
    <>
    {showForm ? 
      (<form action="">
        <Input
          id="serviceName"
          name="serviceName"
          type="text"
          onChangeFunction={ inputChanges }
          title="Service Name"
        />
        <Input
          id="login"
          name="login"
          type="text"
          onChangeFunction={ inputChanges }
          title="Login"
        />
        <Input
          id="password"
          name="password"
          type={ passwordType }
          onChangeFunction={ inputChanges }
          title="Password"
        />
        <Input
          id="showPassword"
          name="showPassword"
          type='checkbox'
          onChangeFunction={() => passwordType == 'password' ? setPasswordType('text') : setPasswordType('password') }
          title="Show Password"
        />

        <Input
          id="url"
          name="url"
          type="text"
          onChangeFunction={ inputChanges }
          title="URL"
        />

        <Button
          title="Submit"
          buttonFunction={ () => savePassToLocal(formContent)  }
          isDisabled={ enableButton(formContent) ? false : true }
        />
        <Button
          title="Cancel"
          buttonFunction={ () => setShowForm(false) }
          isDisabled={ false }
        />

        <PasswordValidation password={ formContent.password }/>
        
      </form>) : (
        <Button
          title="Submit new password"
          buttonFunction={ () => setShowForm(true) }
          isDisabled={ false }
        />
      )
    }
    </>
  )
}

export default Form;