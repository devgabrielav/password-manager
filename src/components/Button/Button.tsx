import { ButtonPropsType } from "../../Types/ButtonTypes";

function Button(items: ButtonPropsType) {
  const { title, buttonFunction, isDisabled } = items;
  return (
    <button onClick={ buttonFunction } disabled={ isDisabled } >{ title }</button>
  )
}

export default Button;