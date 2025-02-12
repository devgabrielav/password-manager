import { useState } from "react";
import Button from "../Button/Button";
import { FormType } from "../../Types/FormTypes";
import { enableButton, initialFormContent } from "../../utils/FormUtils";
import Input from "../Input/Input";


function Form() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [formContent, setFormContent] = useState<FormType>(initialFormContent);

  const inputChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormContent({
      ...formContent,
      [name]: value
    })

    enableButton({ formContent, setFunction: setButtonDisabled })
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
          type="password"
          onChangeFunction={ inputChanges }
          title="Password"
        />
        <Input
          id="url"
          name="url"
          type="text"
          onChangeFunction={ inputChanges }
          title="URL"
        />

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