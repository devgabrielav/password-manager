import { ButtonPropsType } from "../Types/ButtonTypes";

function Button(items: ButtonPropsType) {
  const { title, buttonFunction } = items;
  return (
    <button onClick={ buttonFunction } >{ title }</button>
  )
}

export default Button;