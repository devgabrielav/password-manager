import { ButtonHTMLAttributes, useState } from 'react';
import validator from 'validator';

type ButtonProps = {
  id: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type StateProps = {
  service: string;
  login: string;
  senha: string;
  url: string;
};

function Form({ ...rest }: ButtonProps) {
  const [inputValue, setValue] = useState<StateProps>({
    service: '',
    login: '',
    senha: '',
    url: '',
  });

  const [changeButton, setChangeButton] = useState(true);

  const validar = validator.isStrongPassword(inputValue.senha, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 0,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
    pointsPerUnique: 0,
    pointsPerRepeat: 0,
    pointsForContainingLower: 0,
    pointsForContainingUpper: 0,
    pointsForContainingNumber: 0,
    pointsForContainingSymbol: 0,
  });

  const validaInputs = inputValue.service.length > 0 && inputValue.login.length > 0
    && inputValue.senha.length > 7 && inputValue.senha.length <= 16
    && validar === true;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue({
      ...inputValue,
      [name]: value,
    });
    if (validaInputs) {
      setChangeButton(false);
    } else {
      setChangeButton(true);
    }
  };

  return (
    <form action="">
      <label htmlFor="service">Nome do Serviço</label>
      <input type="text" id="service" name="service" onChange={ handleChange } />

      <label htmlFor="login">Login</label>
      <input type="text" id="login" name="login" onChange={ handleChange } />

      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" onChange={ handleChange } />

      <label htmlFor="url">URL</label>
      <input type="text" id="url" name="url" onChange={ handleChange } />

      <button disabled={ changeButton } id="confirm" type="submit">
        Cadastrar
      </button>
      <button { ...rest }>Cancelar</button>
    </form>
  );
}

export default Form;
