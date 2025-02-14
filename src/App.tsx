import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Passwords from './components/Passwords/Passwords';
import PasswordsProvider from './provider/PasswordsProvider';

function App() {
  
  return (
    <PasswordsProvider>
      <Header />
      <Form />
      <Passwords />
    </PasswordsProvider>
  );
}

export default App;