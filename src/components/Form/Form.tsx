import { ButtonHTMLAttributes, useState } from 'react';

type ButtonProps = {
  id: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type StateProps = {
  service: string;
  login: string;
  senha: string;
  url: string;
};

type ObjsProp = {
  link: string,
  renderLogin: string,
  renderSenha: string,
  chave: string,
  url: string,
};
function Form({ ...rest }: ButtonProps) {
  const [inputValue, setValue] = useState<StateProps>({
    service: '',
    login: '',
    senha: '',
    url: '',
  });
  const [changeButton, setChangeButton] = useState(true);
  const [adicionaCadastro, setAdicionaCadastro] = useState<ObjsProp[]>([]);
  const [showForm, setShowForm] = useState(true);
  const [buttonShow, setButtonShow] = useState(false);
  const [showCadastros, setShowCadastros] = useState(true);

  const cadastrar = (event: React.FormEvent<HTMLFormElement>) => {
    const keys = Date.now();
    event.preventDefault();
    setAdicionaCadastro(
      [...adicionaCadastro,
        {
          link: inputValue.service,
          renderLogin: inputValue.login,
          renderSenha: inputValue.senha,
          chave: String(keys),
          url: inputValue.url,
        }],
    );
    setButtonShow(true);
    setShowForm(false);
  };

  const newCadastroButton = () => {
    setShowForm(true);
    setShowCadastros(true);
    setButtonShow(false);
  };

  const letterRegex = /.*[A-Za-z]/;
  const numberRegex = /.*\d/;
  const minlengthRegex = /^[a-zA-Z0-9!@#$%^&*)(+=._-]{8,50}$/;
  const maxlengthRegex = /^[a-zA-Z0-9!@#$%^&*)(+=._-]{8,16}$/;
  const specialChar = /.*[!@#$%^&*)(+=._-]/;
  const validateAll = new RegExp(
    `^(?=${[
      minlengthRegex.source,
      maxlengthRegex.source,
      letterRegex.source,
      numberRegex.source,
      specialChar.source,
    ].join(')(?=')}).*$`,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue({
      ...inputValue,
      [name]: value,
    });
    if (inputValue.senha.match(validateAll.source)
      && inputValue.login.length > 0
      && inputValue.service.length > 0) {
      setChangeButton(false);
    } else {
      setChangeButton(true);
    }
  };

  const mustHave = [
    { label: 'Possuir 8 ou mais caracteres', pattern: minlengthRegex },
    { label: 'Possuir até 16 caracteres', pattern: maxlengthRegex },
    { label: 'Possuir letras e números', pattern: numberRegex },
    { label: 'Possuir algum caractere especial', pattern: specialChar },
  ];

  const delCad = (chave: string) => {
    setAdicionaCadastro(adicionaCadastro.filter((password) => password.chave !== chave));
  };

  return (
    <>
      {showForm && (
        <form action="" onSubmit={ cadastrar }>
          <label htmlFor="service">Nome do Serviço</label>
          <input type="text" id="service" name="service" onChange={ handleChange } />

          <label htmlFor="login">Login</label>
          <input type="text" id="login" name="login" onChange={ handleChange } />

          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" onChange={ handleChange } />

          <label htmlFor="url">URL</label>
          <input type="text" id="url" name="url" onChange={ handleChange } />
          {
            mustHave.map((rule) => {
              const valor = inputValue.senha.match(rule.pattern.source)
                ? 'valid-password-check' : 'invalid-password-check';
              return <p className={ valor } key={ rule.label }>{ rule.label }</p>;
            })
          }
          <button disabled={ changeButton } id="confirm" type="submit">Cadastrar</button>
          <button { ...rest } id="cancel">Cancelar</button>
        </form>)}
      <div>
        {buttonShow && (
          <button { ...rest } onClick={ newCadastroButton }>
            Cadastrar nova senha
          </button>)}
        {showCadastros && adicionaCadastro.length > 0
          ? (adicionaCadastro.map((cadastro) => (
            <div key={ cadastro.chave }>
              <button data-testid="remove-btn" onClick={ () => delCad(cadastro.chave) }>
                x
              </button>
              <a href={ cadastro.url }>{ cadastro.link }</a>
              <p>{ cadastro.renderLogin }</p>
              <p>{ cadastro.renderSenha }</p>
            </div>
          ))) : 'Nenhuma senha cadastrada'}
      </div>
    </>
  );
}

export default Form;
