function Form() {
  return (
    <form action="">
      <label htmlFor="service">Nome do Serviço</label>
      <input type="text" id="service" />
      <label htmlFor="login">Login</label>
      <input type="text" id="login" />
      <label htmlFor="senha">Senha</label>
      <input type="password" name="" id="senha" />
      <label htmlFor="url">URL</label>
      <input type="text" id="url" />
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
