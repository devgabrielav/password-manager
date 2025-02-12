import { useState } from "react";
import Button from "../Button/Button";
import { FormType } from "../Types/FormTypes";
import { initialFormContent } from "../utils/FormUtils";

function Form() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [formContent, setFormContent] = useState<FormType>(initialFormContent);

  const enableButton = () => {
    const { serviceName, login, password } = formContent;
    
    if (serviceName.trim().length !== 0 && login.trim().length !== 0 && password.trim().length !== 0) {
      if ((password.length + 1) >= 8 && (password.length + 1) <= 16) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    } else {
      setButtonDisabled(true);
    }
  }

  const inputChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormContent({
      ...formContent,
      [name]: value
    })

    enableButton();
  }


  return (
    <>
    {showForm ? 
      (<form action="">
        <label htmlFor="serviceName">Service Name</label>
        <input name='serviceName' type="text" id="serviceName" onChange={ inputChanges } />

        <label htmlFor="login">Login</label>
        <input name='login' type="text" id="login" onChange={ inputChanges } />

        <label htmlFor="password">Password</label>
        <input name='password' type="password" id="password" onChange={ inputChanges } />

        <label htmlFor="url">URL</label>
        <input name='url' type="text" id="url" onChange={ inputChanges } />

        <button disabled={ buttonDisabled }>Submit</button>
        <Button title="Cancel" buttonFunction={ () => setShowForm(false) }/>
      </form>) : (
        <Button title="Submit new password" buttonFunction={ () => setShowForm(true) } />
      )
    }
    </>
  )
}

export default Form;