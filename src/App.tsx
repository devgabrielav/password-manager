import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Title from './components/Title/Title';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleCLick = () => {
    setShowForm(true);
    setShowButton(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setShowButton(true);
  };

  return (
    <>
      <Title />
      {showForm && <Form id="cancel" onClick={ handleCancel } />}
      {showButton && <button onClick={ handleCLick }>Cadastrar nova senha</button>}
    </>
  );
}

export default App;
