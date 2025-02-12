import { InputType } from "../../Types/InputTypes";

function Input({ id, name, title, type, onChangeFunction }: InputType) {

  return (
    <>
      <label htmlFor={ id }>{ title }</label>
      <input type={ type } id={ id } name={ name } onChange={ onChangeFunction } />
    </>
  )
}

export default Input;